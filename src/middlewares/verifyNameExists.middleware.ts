import { NextFunction, Request, Response } from 'express';
import { TMovieRepo } from '../interfaces/movie.interface';
import { AppError } from '../errors/error';
import { AppDataSource } from '../data-source';
import { Movie } from '../entities/index';

const verifyNameExistsMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const movieName: string = req.body.name;

  const repo: TMovieRepo = AppDataSource.getRepository(Movie);
  const movie = await repo.findOneBy({ name: movieName });

  if (movie) {
    throw new AppError('Movie already exists.', 409);
  }

  res.locals = { ...res.locals, movie };

  return next();
};

export { verifyNameExistsMiddleware };
