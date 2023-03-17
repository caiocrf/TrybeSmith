import { Request, Response } from 'express';
import ProductService from '../services/productsService';

export default class ProductController {
  constructor(public productService = new ProductService()) { }

  public insertProduct = async (req: Request, res: Response):Promise<void> => {
    const product = req.body;

    const insertedProduct = await this.productService.insertProduct(product);
    
    res.status(201).json(insertedProduct);
  };

  public getAllProducts = async (_req: Request, res: Response):Promise<void> => {
    const products = await this.productService.getAllProducts();
    res.status(200).json(products);
  };
}