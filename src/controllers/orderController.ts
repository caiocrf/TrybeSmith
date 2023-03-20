import { Request, Response } from 'express';
import OrderService from '../services/orderService';

export default class OrderController {
  constructor(public orderService = new OrderService()) { }
  
  public getAll = async (_req: Request, res: Response):Promise<void> => {
    const allOrders = await this.orderService.getAllOrder();
    res.status(200).json(allOrders);
  };
}