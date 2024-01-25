import express from 'express';
const router = express.Router();

import userRoute from './user.route';
/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = () => {
  router.get('/newuser1', (req, res) => {
    res.json('Welcome');
  });
  router.use('/newuser1', userRoute);
  return router;
};

export default routes;