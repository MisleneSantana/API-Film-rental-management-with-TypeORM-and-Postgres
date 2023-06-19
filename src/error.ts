import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';

export class AppError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number = 400) {
    super(message);
    this.statusCode = statusCode;
  }
}

export const handleErrors = (error: Error, req: Request, res: Response, next: NextFunction): Response => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({ message: error.message });
  }

  if (error instanceof z.ZodError) {
    return res.status(400).json(error.flatten().fieldErrors);
  }

  console.error(error);
  return res.status(500).json({ message: 'Internal Server Error.' });
};
