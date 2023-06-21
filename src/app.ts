import 'express-async-errors';
import express, { Application } from 'express';
import { movieRouter } from './routers/movie.router';
import { handleError } from './middlewares/handleError.middleware';

// Config. iniciais da aplicação
const app: Application = express();
app.use(express.json());

app.use('/movies', movieRouter);

app.use(handleError);

export default app;
