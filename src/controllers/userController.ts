import { Request, Response } from 'express';
import UserService from '../services/userService';

export default class UserController {
  constructor(public userService = new UserService()) { }
      
  public insertUser = async (req: Request, res: Response):Promise<void> => {
    const user = req.body;
      
    const userInserted = await this.userService.insertUser(user);
    res.status(201).json(userInserted);
  };
}
