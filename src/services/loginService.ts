import LoginModel from '../models/loginModel';
import connection from '../models/connection';
import { ILogin } from '../Interface/login';

export default class LoginService {
  public model: LoginModel;

  constructor() {
    this.model = new LoginModel(connection);
  }

  public async Login(login:ILogin) {
    const loginU = await this.model.login(login);
    return loginU;
  }
}