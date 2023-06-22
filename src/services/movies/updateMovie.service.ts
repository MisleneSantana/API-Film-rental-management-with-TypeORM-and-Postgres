import { Movie } from '../../entities/index';
import { AppDataSource } from '../../data-source';
import { TMovieRepo, TMovieUpdate } from '../../interfaces/movie.interfaces';

export const updateMovieService = async (foundMovie: Movie, movieData: TMovieUpdate): Promise<Movie> => {
  const movieRepo: TMovieRepo = AppDataSource.getRepository(Movie);
  return await movieRepo.save({ ...foundMovie, ...movieData });
};
