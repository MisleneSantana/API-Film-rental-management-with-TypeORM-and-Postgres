import { Movie } from '../../entities/index';
import { AppDataSource } from '../../data-source';
import { TMovieRepo, TMovieUpdate } from '../../interfaces/movie.interface';

const updateMovieService = async (movieBody: TMovieUpdate, movie: Movie): Promise<Movie> => {
  const movieRepo: TMovieRepo = AppDataSource.getRepository(Movie);
  return await movieRepo.save({ ...movie, ...movieBody });
};

export { updateMovieService };
