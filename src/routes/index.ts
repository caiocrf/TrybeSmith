import express from 'express';
import productRoute from './productRoute';
import userRoute from './userRoute';
import orderRoute from './orderRoute';

const route = express.Router();

route.use(productRoute);
route.use(userRoute);
route.use(orderRoute);

export default route;