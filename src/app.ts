import 'express-async-errors';
import express, { Application } from 'express';
import { handleErrors } from './error';
import { movieRouter } from './routes/movie.router';

// Config. iniciais da aplicação
const app: Application = express();
app.use(express.json());

app.use('/movies', movieRouter);

app.use(handleErrors);

export default app;
