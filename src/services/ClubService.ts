import { Request, Response } from 'express';
import ClubRepository from '@/repositories/ClubRepository';
import UserService from '@/services/UserService';
import { CreateClubType } from '@/dtos/CreateClubDto';

const createClub = async (req: Request, res: Response) => {

  const dto: CreateClubType = req.body;
  const user = dto.user;

  delete dto.user;

  try {
    const club = await ClubRepository.createClub(dto);
    await UserService.assignClubToUser(user!.email, club.id);

    res.status(201).json(club);
  } catch (e) {
    console.log(e);
    res.status(400).json(e);
  }


};

const updateClub = async (req: Request, res: Response) => {

  const dto: CreateClubType = req.body;

  const id = dto.user!.clubId!;


  try {
    const result = await ClubRepository.updateClubById(id, dto);
    res.status(200).json(result);
  } catch (e) {
    console.log(e)
    res.status(500).json(e);
  }

};

export default { createClub, updateClub };
