import { NextFunction, Request, Response } from 'express';

// page->  "Se < 1"-> Retorna 1.
// perPage-> limita o perPage para no máximo 5 resultados - "Se > =5,ou, < 0 "-> Retorna 5.
// prevPage-> Pagina anterior (pagina atual -1).
// nextPage-> Pagina anterior (pagina atual +1).
// res.locals-> Tudo que ja tem no locals + o objeto pagination contendo todas as chaves nele inseridas.
// page-> "quantidade de dados retornados(perPage) * página atual(page) -1".

export const paginationMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  const queryPage: number = Number(req.query.page);
  const queryPerPage: number = Number(req.query.perPage);

  const page: number = queryPage && queryPage > 1 ? queryPage : 1;
  const perPage: number = queryPerPage && queryPerPage <= 5 && queryPerPage > 0 ? queryPerPage : 5;

  const baseUrl: string = `http://localhost:3000/movies`;
  let prevPage: string | null = `${baseUrl}?page=${page - 1}&perPage=${perPage}`;
  const nextPage: string = `${baseUrl}?page=${page + 1}&perPage=${perPage}`;

  if (page - 1 <= 0) {
    //'página atual -1 <= 0';
    prevPage = null;
  }

  res.locals = {
    ...res.locals,
    pagination: {
      page: perPage * (page - 1), // página atual -1
      perPage,
      prevPage,
      nextPage,
    },
  };

  return next();
};
