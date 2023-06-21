import { Request, Response } from 'express';
import { Movie } from '../entities/index';
import { TMovieUpdate } from '../interfaces/movie.interfaces';
import { createMovieService } from '../services/movies/createMovie.service';
import { readMoviesService } from '../services/movies/readMovies.service';
import { updateMovieService } from '../services/movies/updateMovie.service';
import { deleteMovieService } from '../services/movies/deleteMovie.service';
import { IPagination } from '../interfaces/pagination.interfaces';

const createMovieController = async (req: Request, res: Response): Promise<Response> => {
  const newMovie: Movie = await createMovieService(req.body);
  return res.status(201).json(newMovie);
};

// page - Qual pagina estamos acessando - skip/OFFSET
// perPage - Quantos resultados por página - take/LIMIT
// LIMIT - "SELECT * FROM products LIMIT 3;" - Os três primeiros dados/resultados
// OFFSET - "SELECT * FROM products LIMIT 3 OFFSET 1;" - Desloca a requisicao um dado p/frente

const retrieveMoviesController = async (req: Request, res: Response): Promise<Response> => {
  const paginationOfObjects = res.locals.pagination;
  const paginationMovies: IPagination = await readMoviesService(paginationOfObjects);
  return res.status(200).json(paginationMovies);
};

const retrieveMovieByIdController = async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).json(res.locals.movie);
};

const updateMovieController = async (req: Request, res: Response): Promise<Response> => {
  const movieData: TMovieUpdate = req.body;
  const foundMovie: Movie = res.locals.movie;

  const movie: Movie = await updateMovieService(foundMovie, movieData);
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
