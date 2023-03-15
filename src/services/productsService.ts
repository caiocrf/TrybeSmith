import ProductModel from '../models/productsModel';
import connection from '../models/connection';
import { IProduct } from '../Interface/produtc';

export default class ProductService {
  public model: ProductModel;
  
  constructor() {
    this.model = new ProductModel(connection);
  }
  
  public async insertProduct(product:IProduct):Promise<IProduct> {
    return this.model.insertProduct(product);
  } 
}
