import { Pool, RowDataPacket } from 'mysql2/promise';
import { IOrder } from '../Interface/order';

export default class OrderModel {
  public connection: Pool;

  constructor(connection:Pool) {
    this.connection = connection;
  }

  public async getAllOrder():Promise<IOrder[]> {
    const [result] = await this.connection.execute<(IOrder & RowDataPacket)[]>(
      `SELECT o.id, o.user_id as userId, JSON_ARRAYAGG(p.id) as productsIds
             FROM Trybesmith.orders as o
             INNER JOIN Trybesmith.products as p
             ON o.id = p.order_id
             GROUP BY o.id
             ORDER BY o.id`);
    return result;
  }
}