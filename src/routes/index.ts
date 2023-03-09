import express from 'express';
import resizeImage from './api/resizeImage';
import logging from './middlewares/logging';

const routes = express.Router();

routes.get('/', (req, res) => {
    console.log();
    res.send('main api route');
});
routes.use('/images', logging, resizeImage);

export default routes;
