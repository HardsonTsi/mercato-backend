import { AnySchema } from 'yup';
import { NextFunction, Request, RequestHandler, Response } from 'express';

const validate = (schema: AnySchema): RequestHandler => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate(req.body, {
        abortEarly: false,
        stripUnknown: true,
      });
      next();
    } catch (err: any) {
      res.status(400).json({
        err: err?.['message'],
      });
    }
  };
};

export default validate;
