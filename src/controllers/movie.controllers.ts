import { Request, Response } from 'express';
import { createMovieService } from '../services/movies/createMovie.service';
import { readMoviesService } from '../services/movies/readMovies.service';
import { readMovieByIdService } from '../services/movies/readMovieById.service';
import { Movie } from '../entities/index';

const createMovieController = async (req: Request, res: Response): Promise<Response> => {
  const newMovie: Movie = await createMovieService(req.body);
  return res.status(201).json(newMovie);
};

const retrieveMoviesController = async (req: Request, res: Response): Promise<Response> => {
  const movies: Movie[] = await readMoviesService();
  return res.status(200).json(movies);
};

const retrieveMovieByIdController = async (req: Request, res: Response): Promise<Response> => {
  const movieById: Movie | null = await readMovieByIdService(req.params.id);
  return res.status(200).json(movieById);
};

export { createMovieController, retrieveMoviesController, retrieveMovieByIdController };
