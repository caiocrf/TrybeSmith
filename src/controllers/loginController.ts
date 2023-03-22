import { Request, Response } from 'express';
import LoginService from '../services/loginService';
import { generateToken } from '../auth/jwt';

export default class LoginController {
  constructor(public loginService = new LoginService()) { }

  public login = async (req:Request, res:Response) => {
    const login = req.body;
    const user = await this.loginService.Login(login);
    if (!user) {
      return res.status(401).json({ message: 'Username or password invalid' });
    }
    const tokenJwt = generateToken(req.body);
    res.status(200).json({ token: tokenJwt });
  };
}
