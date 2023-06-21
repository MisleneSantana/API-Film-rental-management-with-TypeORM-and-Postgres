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

const movieRouter: Router = Router();

// 1.Cadastra um novo filme:
movieRouter.post('', validateBodyMiddleware(movieCreateSchema), verifyNameExistsMiddleware, createMovieController);

// 2.Lista todos os filmes cadastrados:
movieRouter.get('', retrieveMoviesController);

// Todas as rotas com ID, checa se o movie existe
movieRouter.use('/:id', verifyIdExistsMiddleware);

// Extra - Read by id:
movieRouter.get('/:id', retrieveMovieByIdController);

// 3.Atualiza o filme passado por id:
movieRouter.patch('/:id', validateBodyMiddleware(movieUpdateSchema), verifyNameExistsMiddleware, updateMovieController);

// 4.Deleta o filme passado por id:
movieRouter.delete('/:id', deleteMovieController);

export { movieRouter };
