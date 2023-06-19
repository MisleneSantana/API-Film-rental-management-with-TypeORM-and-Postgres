import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Movie } from '../../entities/index';

const readMovieByIdService = async (movieId: string): Promise<Movie> => {
  const movieRepo: Repository<Movie> = AppDataSource.getRepository(Movie);
  return await movieRepo.findOneBy({ id: parseInt(movieId) });
};

export { readMovieByIdService };
