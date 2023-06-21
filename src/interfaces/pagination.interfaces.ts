import { Movie } from '../entities/index';

export interface IPagination {
  prevPage: string | null;
  nextPage: string | null;
  count: number;
  data: Array<Movie>;
}

export interface IPaginationParams {
  page: number;
  perPage: number;
  prevPage: string | null;
  nextPage: string | null;
  order: string;
  sort: string;
}
