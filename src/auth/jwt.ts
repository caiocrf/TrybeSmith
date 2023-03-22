import jwt, { SignOptions } from 'jsonwebtoken';
import { ILogin } from '../Interface/login';

const secret = process.env.JWT_SECRET || 'secret';

const jwtConfig: SignOptions = { 
  algorithm: 'HS256', 
  expiresIn: '5d', 
};

export const generateToken = (payload: ILogin) =>
  jwt.sign(payload, secret, jwtConfig);

export default generateToken;