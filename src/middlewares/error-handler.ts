import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../errors/custom-error';
import { Logger } from '../logger';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  const logger = Logger(`${err.name} @ ${__filename}`);

  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  logger.error(err);

  res.status(500).send({
    errors: [
      {
        error: err.name,
        message: err.message || 'Something went wrong',
      },
    ],
  });
};
