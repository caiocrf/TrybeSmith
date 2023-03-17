import express from 'express';
import ProductController from '../controllers/productsController';

const router = express.Router();

const productController = new ProductController();

router.post('/products', (req, res) => productController.insertProduct(req, res));

router.get('/products', (req, res) => productController.getAllProducts(req, res));

export default router;