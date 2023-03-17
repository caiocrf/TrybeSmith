import express from 'express';
import productRoute from './productRoute';
import userRoute from './userRoute';

const route = express.Router();

route.use(productRoute);
route.use(userRoute);

export default route;