import jwt, { SignOptions } from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'secret';

const jwtConfig: SignOptions = { 
  algorithm: 'HS256', 
  expiresIn: '7d', 
};

export const generateToken = (data:object) =>
  jwt.sign({ data }, secret, jwtConfig);

export default generateToken;