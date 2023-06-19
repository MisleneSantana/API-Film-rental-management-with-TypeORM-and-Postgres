import app from './app';
import { AppDataSource } from './data-source';

// Inicia a conexão com o banco de dados
// Métoodo initialize inicializa a conexão com o banco de dados

AppDataSource.initialize()
  .then(async () => {
    console.log('Database connected.');

    const PORT: number = Number(process.env.PORT || 3000);
    app.listen(PORT, () => {
      console.log(`Server is running on https://localhost:${PORT}`);
    });
  })
  .catch((error) => console.error(error));
