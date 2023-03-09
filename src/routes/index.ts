import express from 'express';
import resizeImage from './api/resizeImage';

const routes = express.Router();

routes.get('/', (req, res) => {
    console.log();
    res.send('main api route');
});
routes.use('/images', resizeImage);

export default routes;
