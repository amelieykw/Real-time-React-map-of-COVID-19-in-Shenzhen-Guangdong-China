import express from 'express';
import { residentionalAreaGetHandler } from './residentionalAreaHandler';

export default () => {
  const residentionalAreaRouter = express.Router();

  residentionalAreaRouter.get('/', residentionalAreaGetHandler);

  return residentionalAreaRouter;
};