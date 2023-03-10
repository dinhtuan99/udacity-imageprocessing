import { Router, Request, Response } from 'express';
import resizeImage from './api/resizeImage';

const routes: Router = Router();

routes.get('/', (req: Request, res: Response): void => {
  console.log();
  res.send('main api route');
});
routes.use('/images', resizeImage);

export default routes;
