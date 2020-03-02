import express from 'express';
import cors from 'cors';

import registeRoutes from './routes';

export default () => {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static('./dist/frontend'));

  registeRoutes(app);

  return app;
};