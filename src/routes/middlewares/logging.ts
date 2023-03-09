import express from 'express';

const logging = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.log(`${req.baseUrl} was visited`);
  next();
};

export default logging;
