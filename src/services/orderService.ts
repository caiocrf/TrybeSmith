import OrderModel from '../models/orderModel';
import connection from '../models/connection';
import { IOrder } from '../Interface/order';

export default class OrderService {
  public model: OrderModel;
  
  constructor() {
    this.model = new OrderModel(connection);
  }
  
  public async getAllOrder(): Promise<IOrder[]> {
    const getAllOrders = await this.model.getAllOrder();
    return getAllOrders;
  }
}