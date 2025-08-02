import { z } from 'zod';
import { productSchema } from './product';

export const cartItemSchema = z.object({
  product: productSchema,
  quantity: z.number(),
});

export type CartItem = z.infer<typeof cartItemSchema>;
