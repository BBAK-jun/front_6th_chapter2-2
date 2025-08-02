import { z } from 'zod';

export const discountSchema = z.object({
  quantity: z.number(),
  rate: z.number(),
});

export type Discount = z.infer<typeof discountSchema>;
