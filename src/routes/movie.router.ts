import { Router } from 'express';
import { createMovieController } from '../controllers/movie.controllers';

const movieRouter: Router = Router();

// Cadastra um novo filme:
movieRouter.post('', createMovieController);

// Lista todos os filmes cadastrados:
movieRouter.get('');

// Atualiza o filme passado por id:
movieRouter.patch('/:id');

// Deleta o filme passado por id:
movieRouter.delete('/:id');

export { movieRouter };
