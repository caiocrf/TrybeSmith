import { Request, Response, NextFunction } from 'express';

const validation = (req:Request, res: Response, next: NextFunction) => {
  const login = req.body;
  if (!login.username) {
    return res.status(400).json({ message: '"username" is required' });
  }
  if (!login.password) {
    return res.status(400).json({ message: '"password" is required' });
  }
  next();
};

export default validation;