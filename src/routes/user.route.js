import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator } from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

//route to create a new user
router.post('/registration', newUserValidator, userController.newUser);

//route to login user 
router.post('/login', userController.loginUser);

router.get('/profile/:_id', userAuth, userController.getUser);

export default router;
