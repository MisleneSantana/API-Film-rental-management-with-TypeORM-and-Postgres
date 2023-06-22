import { Router } from 'express';
import { validateBodyMiddleware } from '../middlewares/validateBody.middleware';
import { movieCreateSchema, movieUpdateSchema } from '../schemas/movie.schema';
import { verifyNameExistsMiddleware } from '../middlewares/verifyNameExists.middleware';
import { verifyIdExistsMiddleware } from '../middlewares/verifyIdExists.middleware';
import { paginationMiddleware } from '../middlewares/pagination.middleware';
import { ordinationMiddleware } from '../middlewares/ordination.middleware';
import {
  createMovieController,
  deleteMovieController,
  retrieveMovieByIdController,
  retrieveMoviesController,
  updateMovieController,
} from '../controllers/movie.controllers';

export const movieRouter: Router = Router();

movieRouter.post('', validateBodyMiddleware(movieCreateSchema), verifyNameExistsMiddleware, createMovieController);

movieRouter.get('', paginationMiddleware, ordinationMiddleware, retrieveMoviesController);

movieRouter.use('/:id', verifyIdExistsMiddleware);

movieRouter.get('/:id', retrieveMovieByIdController);

movieRouter.patch('/:id', validateBodyMiddleware(movieUpdateSchema), verifyNameExistsMiddleware, updateMovieController);

movieRouter.delete('/:id', deleteMovieController);
