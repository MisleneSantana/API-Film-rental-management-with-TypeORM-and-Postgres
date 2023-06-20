import { Repository } from 'typeorm';
import { Movie } from '../../entities/index';
import { AppDataSource } from '../../data-source';

const updateMoviesService = async (): Promise<Movie> => {
  const movieRepo: Repository<Movie> = AppDataSource.getRepository(Movie);
  const movie: Movie = await movieRepo.findOneBy({ id: 1 });
  movie.name = 'Update Movie';

  await movieRepo.save({ id: 1, name: 'Update Movie' });
  return movie;
};

export { updateMoviesService };
