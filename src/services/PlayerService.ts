import PlayerRepository from '@/repositories/PlayerRepository';
import { Request, Response } from 'express';
import ClubRepository from '@/repositories/ClubRepository';
import prisma from '@/lib/prisma';
import Mqtt from '@/lib/mqtt';

const createPlayer = async (req: Request, res: Response) => {
  const dto = req.body;
  const user = dto.user;

  delete dto.user;

  try {
    const response = await PlayerRepository.createPlayer(user.clubId, dto);
    if (response.available) {
      Mqtt.publishMessage(
        'newPlayer',
        JSON.stringify({
          seller: user.clubId,
          message: `${response.firstname} ${response.lastname} a été mis en vente par le club ${user.clubId}`,
        }),
      );
    }

    res.status(201).json(response);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
};

const updatePlayer = async (req: Request, res: Response) => {
  const dto = req.body;
  const user = dto.user;
  const id = req.params.id;

  delete dto.user;

  console.log('dto', dto);

  try {
    const response = await PlayerRepository.updatePlayer(user.clubId, id, dto);
    if (response.available) {
      Mqtt.publishMessage(
        'newPlayer',
        JSON.stringify({
          seller: user.clubId,
          message: `${response.firstname} ${response.lastname} a été mis en vente par le club ${user.clubId}`,
        }),
      );
    }
    res.status(200).json(response);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }
};

const getPlayerById = async (req: Request, res: Response) => {
  const id = req.params.id;

  const player = await PlayerRepository.findPlayerById(id);

  if (!player) res.status(404).json({ message: 'Joueur introuvable' });

  res.status(200).json(player);
};

const deletePlayer = async (req: Request, res: Response) => {
  const id = req.params.id;
  const clubId = req.body.user.clubId;

  try {
    await PlayerRepository.deletePlayerById(clubId, id);
    res.status(200).json({ message: 'Joueur supprimé' });
  } catch (e) {
    res.status(500).send(e);
  }
};

const getClubPlayers = async (req: Request, res: Response) => {
  const clubId = req.body.user.clubId;
  const response = await PlayerRepository.findClubPlayers(clubId);
  res.status(200).json(response);
};

const getMarketplace = async (req: Request, res: Response) => {
  const clubId = req.body.user.clubId;
  try {
    const response = await PlayerRepository.findMarketplacePlayers(clubId);
    res.status(200).json(response);
  } catch (e) {
    console.log(e);
    res.status(500).send([]);
  }
};

const sellPlayer = async (req: Request, res: Response) => {
  try {
    const buyerId = req.body.user.clubId;
    const playerId = req.body.playerId;

    const player = await PlayerRepository.findPlayerById(playerId);

    if (!player) {
      res
        .status(404)
        .json({ message: `Joueur avec l'ID ${playerId} introuvable.` });
      return;
    }

    const sellerId = player.clubId;
    if (buyerId == sellerId) {
      console.table([buyerId, sellerId]);
      res
        .status(400)
        .json({ message: `Impossible d'acheter votre propre joueur.` });
      return;
    }

    const seller = await ClubRepository.findClubById(sellerId!);

    const buyer = await ClubRepository.findClubById(buyerId);

    if (!seller || !buyer) {
      res
        .status(404)
        .json({ message: `Club acheteur ou vendeur introuvable.` });
      return;
    }

    if (buyer.budget - player.price < 0) {
      console.log('Budget insuffisant');
      res
        .status(400)
        .json({
          message: `Le budget du club acheteur est insuffisant pour cet achat.`,
        });
      return;
    }

    const transfert = await prisma.transfer.create({
      data: {
        sellerId: sellerId!,
        buyerId,
        playerId,
      },
    });

    // Mise à jour du joueur
    await PlayerRepository.updatePlayer(sellerId!, playerId, {
      available: false,
      clubId: buyerId,
    });

    // Mise à jour des budgets
    await Promise.all([
      ClubRepository.updateClubById(buyerId, {
        budget: buyer.budget - player.price,
      }),
      ClubRepository.updateClubById(sellerId!, {
        budget: seller.budget + player.price,
      }),
    ]);

    const payload = {
      message: `Joueur ${player.lastname} ${player.firstname} vendu au club ${buyer.name}`,
      seller: sellerId,
    };

    Mqtt.publishMessage('sell', JSON.stringify(payload));

    res.status(200).json(transfert);
  } catch (error) {
    console.error('Erreur lors du transfert :', error);
    res.status(500).json({ message: `Une erreur interne est survenue.` });
  }
};

export default {
  createPlayer,
  updatePlayer,
  getPlayerById,
  deletePlayer,
  getClubPlayers,
  getMarketplace,
  sellPlayer,
};
