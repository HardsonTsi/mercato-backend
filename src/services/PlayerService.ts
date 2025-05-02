import PlayerRepository from '@/repositories/PlayerRepository';
import { Request, Response } from 'express';


const createPlayer = async (req: Request, res: Response) => {
  const dto = req.body;
  const user = dto.user;

  delete dto.user;

  try {
    const response = await PlayerRepository.createPlayer(user.clubId, dto);
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

  console.log(dto);

  try {
    const response = await PlayerRepository.updatePlayer(user.clubId, id, dto);
    res.status(200).json(response);
  } catch (e) {
    console.log(e);
    res.status(500).send(e);
  }

};

const getPlayerById = async (req: Request, res: Response) => {
  const id = req.params.id;

  const player = await PlayerRepository.findPlayerById(id);

  if (!player)
    res.status(404).json({ message: 'Joueur introuvable' });

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


export default { createPlayer, updatePlayer, getPlayerById, deletePlayer, getClubPlayers };
