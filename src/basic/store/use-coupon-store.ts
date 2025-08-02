import { Coupon } from '@/basic/models/coupon';
import { useLocalStorage } from '@/basic/shared/hooks';
import { createStorage } from '@/basic/utils';

const couponStorage = createStorage<Coupon[]>({
  key: 'coupons',
  value: [
    {
      name: '5000원 할인',
      code: 'AMOUNT5000',
      discountType: 'amount',
      discountValue: 5000,
    },
    {
      name: '10% 할인',
      code: 'PERCENT10',
      discountType: 'percentage',
      discountValue: 10,
    },
  ],
});

export const useCouponStore = () => {
  const coupons = useLocalStorage(couponStorage) ?? [];

  const setCoupons = (coupons: Coupon[] | ((prev: Coupon[]) => Coupon[])) => {
    if (typeof coupons === 'function') {
      couponStorage.set(coupons(couponStorage.get() ?? []));
    } else {
      couponStorage.set(coupons);
    }
  };

  return { coupons, setCoupons };
};
