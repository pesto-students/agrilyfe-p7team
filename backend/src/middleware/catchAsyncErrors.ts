import { Request, Response, NextFunction } from 'express';

module.exports = (theFunc: any) => (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(theFunc(req, res, next)).catch(next);
  };