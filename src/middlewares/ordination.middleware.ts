import { NextFunction, Request, Response } from 'express';

// order-> Recebe o tipo de ordenação que será feita -> asc ou desc -> Sem envio, deve ser asc.
// sort-> Recebe em qual coluna a ordenação será feita -> price e duration -> Se não passar, ordenar por ID.

export const ordinationMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const querySort: any = req.query.sort;
  const queryOrder: any = req.query.order;

  const sortOptions: Array<string> = ['price', 'duration'];
  const orderOptions: Array<string> = ['asc', 'desc'];

  let sort: string;
  let order: string;

  if (!(querySort && sortOptions.includes(querySort))) {
    sort = 'id';
  } else {
    sort = querySort;
  }

  if (!querySort || !(queryOrder && orderOptions.includes(queryOrder))) {
    order = 'asc';
  } else {
    order = queryOrder;
  }

  res.locals.pagination = {
    ...res.locals.pagination,
    order,
    sort,
  };

  return next();
};
