import { Pool, RowDataPacket } from 'mysql2/promise';
import { ILogin } from '../Interface/login';

export default class LoginModel {
  public connection: Pool;

  constructor(connection:Pool) {
    this.connection = connection;
  }

  public async login(user: ILogin):Promise<ILogin> {
    const { username, password } = user;
    const [[result]] = await this.connection.execute<
    RowDataPacket[] & ILogin[]>(
      `SELECT * FROM Trybesmith.users
      WHERE username = ? AND password = ?`, 
      [username, password],
    );      
    return result;
  }
}