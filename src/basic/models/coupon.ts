import { z } from 'zod';

export const couponDiscountTypeSchema = z.enum(['amount', 'percentage']);

export const couponSchema = z.object({
  name: z.string(),
  code: z.string(),
  discountType: couponDiscountTypeSchema,
  discountValue: z.number(),
});

export type Coupon = z.infer<typeof couponSchema>;
