import { AppDataSource } from '../../data-source';
import { Movie } from '../../entities/index';
import { TMovieRepo } from '../../interfaces/movie.interfaces';

export const deleteMovieService = async (movie: Movie): Promise<void> => {
  const movieRepo: TMovieRepo = AppDataSource.getRepository(Movie);
  await movieRepo.remove(movie);
};
