import { NextFunction, Request, Response } from 'express';
import jwt from '@/lib/jwt';

export const withHttpStatus = (req: Request, res: Response, next: NextFunction) => {
  if (req.path.includes('/queues')) {
    next();
  } else {
    const originalJson = res.json;
    res.json = function(data: any) {
      return originalJson.call(this, {
        data,
        status: res.statusCode,
      });
    };
    next();
  }
};

export const checkJWT = (req: Request, res: Response, next: NextFunction) => {
  let token: string = req.headers['authorization'] || '';

  if (!token) {
    res.status(401).json({ message: 'Token manquant' });
    return;
  }

  if (!token.startsWith('Bearer ')) {
    res.status(401).json({ message: `Token invalide` });
    return;
  }

  token = token.slice(7, token.length);

  const user = jwt.verify(token)

  if (user) {
    req.body = {
      ...req.body,
      user
    }
    next();
  }else{
    res.status(401).json({ message: 'Token inconnu' });
  }

};
