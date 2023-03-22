import express from 'express';
import productRoute from './productRoute';
import userRoute from './userRoute';
import orderRoute from './orderRoute';
import loginRoute from './loginRoute';

const route = express.Router();

route.use(productRoute);
route.use(userRoute);
route.use(orderRoute);
route.use(loginRoute);
export default route;