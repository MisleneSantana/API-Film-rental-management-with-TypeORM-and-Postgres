import { AppDataSource } from '../../data-source';
import { Movie } from '../../entities/index';
import { TMovieRepo } from '../../interfaces/movie.interfaces';
import { IPagination, IPaginationParams } from '../../interfaces/pagination.interfaces';

// FindAndCount-> Busca no banco de dados (Retorna um array de dados) e um number (que conta o número de dados retornados).

const readMoviesService = async ({
  page,
  perPage,
  order,
  sort,
  prevPage,
  nextPage,
}: IPaginationParams): Promise<IPagination> => {
  const movieRepo: TMovieRepo = AppDataSource.getRepository(Movie);

  // { [sort]: order } -> Referência uma chave de forma dinâmica - Nome da variável (qual chave estará ordenando): tipo de ordenação que será feita.

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

export { readMoviesService };
