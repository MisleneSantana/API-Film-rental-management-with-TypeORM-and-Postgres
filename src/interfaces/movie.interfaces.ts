import { z } from 'zod';
import { movieCreateSchema } from '../schemas/movie.schema';
import { DeepPartial, Repository } from 'typeorm';
import { Movie } from '../entities/index';

export type TMovieCreate = z.infer<typeof movieCreateSchema>;
export type TMovieRead = Array<Movie>;
export type TMovieUpdate = DeepPartial<TMovieCreate>;
export type TMovieRepo = Repository<Movie>;
