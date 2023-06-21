import { AppDataSource } from '../../data-source';
import { Movie } from '../../entities/index';
import { TMovieRead, TMovieRepo } from '../../interfaces/movie.interface';

const readMoviesService = async (): Promise<TMovieRead> => {
  const movieRepo: TMovieRepo = AppDataSource.getRepository(Movie);
  const movies: TMovieRead = await movieRepo.find();
  return movies;
};

export { readMoviesService };
