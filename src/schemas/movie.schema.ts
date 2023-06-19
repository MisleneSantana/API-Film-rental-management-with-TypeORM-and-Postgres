import { z } from 'zod';

export const movieSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(50),
  description: z.string(),
  duration: z.number().int(),
  price: z.number().int(),
});

export const movieCreateSchema = movieSchema.omit({ id: true });
export const movieReadSchema = movieSchema.array();
export const movieUpdateSchema = movieCreateSchema.partial();
