import { Request, Response } from 'express';
import { Movie } from '../entities/index';
import { TMovieRead, TMovieUpdate } from '../interfaces/movie.interface';
import { createMovieService } from '../services/movies/createMovie.service';
import { readMoviesService } from '../services/movies/readMovies.service';
import { updateMovieService } from '../services/movies/updateMovie.service';
import { deleteMovieService } from '../services/movies/deleteMovie.service';

const createMovieController = async (req: Request, res: Response): Promise<Response> => {
  const newMovie: Movie = await createMovieService(req.body);
  return res.status(201).json(newMovie);
};

const retrieveMoviesController = async (req: Request, res: Response): Promise<Response> => {
  const movies: TMovieRead = await readMoviesService();
  return res.status(200).json(movies);
};

const retrieveMovieByIdController = async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).json(res.locals.movie);
};

const updateMovieController = async (req: Request, res: Response): Promise<Response> => {
  const movieBody: TMovieUpdate = req.body;
  const foundMovie: Movie = res.locals.movie;

  const movie: Movie = await updateMovieService(movieBody, foundMovie);
  return res.status(200).json(movie);
};

const deleteMovieController = async (req: Request, res: Response): Promise<Response> => {
  await deleteMovieService(res.locals.movie);
  return res.status(204).send();
};

export {
  createMovieController,
  retrieveMoviesController,
  retrieveMovieByIdController,
  updateMovieController,
  deleteMovieController,
};
