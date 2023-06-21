import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { Movie } from '../../entities/index';

const readMovieByIdService = async (movieId: number): Promise<Movie | null> => {
  const movieRepo: Repository<Movie> = AppDataSource.getRepository(Movie);
  const movie: Movie | null = await movieRepo.findOneBy({ id: movieId });
  return movie;
};

export { readMovieByIdService };
