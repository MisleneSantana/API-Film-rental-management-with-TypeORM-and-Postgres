import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Movie } from '../../entities/index';

const readMoviesService = async (): Promise<Movie[]> => {
  const movieRepo: Repository<Movie> = AppDataSource.getRepository(Movie);
  const movies: Array<Movie> = await movieRepo.find();
  return movies;
};

export { readMoviesService };
