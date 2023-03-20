import express from 'express';
import OrderController from '../controllers/orderController';

const route = express.Router();

const orderController = new OrderController();

route.get('/orders', (req, res) => orderController.getAll(req, res));

export default route;