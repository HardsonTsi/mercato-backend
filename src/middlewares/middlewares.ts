import { NextFunction, Request, Response } from 'express';

export const withHttpStatus = (req: Request, res: Response, next: NextFunction) => {

  const originalJson = res.json;

  res.json = function(data: any) {
    return originalJson.call(this, {
      ...data,
      status: res.statusCode,
    });
  };

  next();
};
