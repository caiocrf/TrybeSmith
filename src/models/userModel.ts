import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IUser } from '../Interface/user';
import { IToken } from '../Interface/token';
import { generateToken } from '../auth/jwt';

export default class UserModel {
  public connection : Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async insertUser(user: IUser):Promise<IToken> {
    const { username, vocation, level, password } = user;
    const [{ insertId: id }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users(username, vocation, level, password) VALUES(?,?,?,?)',
      [username, vocation, level, password],
    );
    
    const token = generateToken({ id, username, password });
    const User: IToken = { token };
    return User;
  }
}