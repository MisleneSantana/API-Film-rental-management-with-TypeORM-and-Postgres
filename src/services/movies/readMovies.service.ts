import { AppDataSource } from '../../data-source';
import { Movie } from '../../entities/index';
import { TMovieRepo } from '../../interfaces/movie.interfaces';
import { IPagination, IPaginationParams } from '../../interfaces/pagination.interfaces';

export const readMoviesService = async ({
  page,
  perPage,
  order,
  sort,
  prevPage,
  nextPage,
}: IPaginationParams): Promise<IPagination> => {
  const movieRepo: TMovieRepo = AppDataSource.getRepository(Movie);

  const [movies, count]: [Array<Movie>, number] = await movieRepo.findAndCount({
    order: { [sort]: order },
    skip: page,
    take: perPage,
  });

  if (count - page <= perPage) {
    nextPage = null;
  }

  return {
    prevPage,
    nextPage,
    count,
    data: movies,
  };
};
