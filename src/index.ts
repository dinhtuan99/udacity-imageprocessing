import express from 'express';
import routes from './routes'; 
import expressWinston from 'express-winston';
import logging from './routes/middlewares/logging';

const app = express();
const port = 3000;

app.use(
  expressWinston.logger({
    winstonInstance: logging,
    meta: false,
    msg: 'HTTP {{req.method}} {{req.url}} {{res.statusCode}} {{res.responseTime}}ms',
    colorize: false,
    ignoreRoute: () => false,
  })
);

app.use("/api", routes);

app.listen(port, () => {
  logging.info(`server start at localhost:${port}`);
});

export default app;
