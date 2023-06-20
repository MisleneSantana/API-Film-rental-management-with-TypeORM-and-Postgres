import { NextFunction, Request, Response } from 'express';
import { TMovie, TMovieResult } from '../interfaces/movie.interface';
import { AppError } from '../error';

// const verifyNameExistsMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
//   const { name } = req.body;

//   const queryResult: TMovieResult = await client.query('SELECT * FROM "movies" WHERE name = $1;', [name]);

//   const movieName: TMovie = queryResult.rows[0];
//   if (movieName) {
//     throw new AppError('Name already exists', 409);
//   }
//   return next();
// };

// export { verifyNameExistsMiddleware };
