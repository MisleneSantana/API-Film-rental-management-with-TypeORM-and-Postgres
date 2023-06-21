import { Router } from 'express';
import {
  createMovieController,
  deleteMovieController,
  retrieveMovieByIdController,
  retrieveMoviesController,
  updateMovieController,
} from '../controllers/movie.controllers';
import { validateBodyMiddleware } from '../middlewares/validateBody.middleware';
import { movieCreateSchema, movieUpdateSchema } from '../schemas/movie.schema';
import { verifyNameExistsMiddleware } from '../middlewares/verifyNameExists.middleware';
import { verifyIdExistsMiddleware } from '../middlewares/verifyIdExists.middleware';
import { paginationMiddleware } from '../middlewares/pagination.middleware';
import { ordinationMiddleware } from '../middlewares/ordination.middleware';

const movieRouter: Router = Router();

// 1. Create a new movie:
movieRouter.post('', validateBodyMiddleware(movieCreateSchema), verifyNameExistsMiddleware, createMovieController);

// 2. Read all movies:
movieRouter.get('', paginationMiddleware, ordinationMiddleware, retrieveMoviesController);

// Todas as rotas com ID, aplica o middleware verifyId:
movieRouter.use('/:id', verifyIdExistsMiddleware);

// Extra: Read movie by id param:
movieRouter.get('/:id', retrieveMovieByIdController);

// 3. Update the movie:
movieRouter.patch('/:id', validateBodyMiddleware(movieUpdateSchema), verifyNameExistsMiddleware, updateMovieController);

// 4. Delete the movie:
movieRouter.delete('/:id', deleteMovieController);

export { movieRouter };
