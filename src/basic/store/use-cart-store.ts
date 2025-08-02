import { CartItem } from '@/basic/models/cart';
import { useLocalStorage } from '@/basic/shared/hooks';
import { createStorage } from '@/basic/utils';

const cartStorage = createStorage<CartItem[]>({ key: 'cart' });

export const useCartStore = () => {
  const cart = useLocalStorage(cartStorage) ?? [];
  const totalItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const appendCart = (cart: CartItem[]) => {
    cartStorage.set([...(cartStorage.get() ?? []), ...cart]);
  };

  const removeByProductId = (productId: string) => {
    cartStorage.set(
      cartStorage.get()?.filter(item => item.product.id !== productId) ?? []
    );
  };

  const setCart = (cart: CartItem[] | ((prev: CartItem[]) => CartItem[])) => {
    if (typeof cart === 'function') {
      cartStorage.set(cart(cartStorage.get() ?? []));
    } else {
      cartStorage.set(cart);
    }
  };

  const reset = () => {
    cartStorage.set([]);
  };

  const findByProductId = (productId: string) => {
    return cart.find(item => item.product.id === productId);
  };

  return {
    cart,
    setCart,

    // actions
    reset,
    appendCart,
    removeByProductId,
    findByProductId,

    // computed-properties
    totalItemCount,
  };
};
