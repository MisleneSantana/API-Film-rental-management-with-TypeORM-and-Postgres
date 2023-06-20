import { Router } from 'express';
import { createMovieController, retrieveMoviesController } from '../controllers/movie.controllers';
import { validateBodyMiddleware } from '../middlewares/validateBody.middleware';
import { movieCreateSchema } from '../schemas/movie.schema';

const movieRouter: Router = Router();

// Cadastra um novo filme:
movieRouter.post('', validateBodyMiddleware(movieCreateSchema), createMovieController);

// Lista todos os filmes cadastrados:
movieRouter.get('', retrieveMoviesController);

// Atualiza o filme passado por id:
movieRouter.patch('/:id');

// Deleta o filme passado por id:
movieRouter.delete('/:id');

export { movieRouter };
