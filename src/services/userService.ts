import UserModel from '../models/userModel';
import connection from '../models/connection';
import { IToken } from '../Interface/token';
import { IUser } from '../Interface/user';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async insertUser(user: IUser) {
    const userInserted: IToken = await this.model.insertUser(user);
    return userInserted;
  }
}