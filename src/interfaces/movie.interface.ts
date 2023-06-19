import { z } from 'zod';
import { movieCreateSchema, movieReadSchema, movieSchema, movieUpdateSchema } from '../schemas/movie.schema';
import { QueryResult } from 'pg';

export type TMovie = z.infer<typeof movieSchema>;

export type TMovieCreate = z.infer<typeof movieCreateSchema>;
export type TMovieRead = z.infer<typeof movieReadSchema>;
export type TMovieUpdate = z.infer<typeof movieUpdateSchema>;
export type TMovieResult = QueryResult<TMovie>;
