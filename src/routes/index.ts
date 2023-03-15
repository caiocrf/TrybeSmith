import express from 'express';
import productRoute from './productRoute';

const route = express.Router();

route.use(productRoute);

export default route;