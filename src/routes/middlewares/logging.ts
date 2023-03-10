import winston from 'winston';

const logging = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'Imageprocessing API' },
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

export default logging;
