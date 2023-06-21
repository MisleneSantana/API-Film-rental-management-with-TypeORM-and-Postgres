import { NextFunction, Request, Response } from 'express';
import { TMovieRepo } from '../interfaces/movie.interface';
import { AppDataSource } from '../data-source';
import { Movie } from '../entities/index';
import { AppError } from '../errors/error';

export const verifyIdExistsMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const movieId: number = Number(req.params.id);

  const repo: TMovieRepo = AppDataSource.getRepository(Movie);
  const movie: Movie | null = await repo.findOneBy({ id: movieId });
  if (!movie) throw new AppError('Movie not found', 404);

  res.locals = { ...res.locals, movie };

  return next();
};
