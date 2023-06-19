import { Repository } from 'typeorm';
import { TMovie } from '../../interfaces/movie.interface';
import { AppDataSource } from '../../data-source';
import { Movie } from '../../entities/index';

const createMovieService = async (movieData: TMovie): Promise<Movie> => {
  const movieRepo: Repository<Movie> = AppDataSource.getRepository(Movie);
  const movie: Movie = movieRepo.create(movieData);

  await movieRepo.save(movie);

  return movie;
};

export { createMovieService };
