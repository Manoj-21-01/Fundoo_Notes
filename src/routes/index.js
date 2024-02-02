import express from 'express';
const router = express.Router();

import userRoute from './user.route';
import noteRoute from './note.route';
import { userAuth } from '../middlewares/auth.middleware';
/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
  router.get('/', (req, res) => {
    res.json('Welcome');
  });
  router.use('/user', userRoute);
  router.use('/note', noteRoute);
  return router;
};

export default routes;