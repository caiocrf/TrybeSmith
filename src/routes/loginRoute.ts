import express from 'express';
import LoginController from '../controllers/loginController';
import validation from '../middlewares/validateLogin';

const route = express.Router();

const loginController = new LoginController();

route.post('/login', validation, (req, res) => loginController.login(req, res));

export default route;