import { create } from 'zustand';
import cartItems from '../constants/cartItems';

export const ModalStore = create((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));

export const cartSlice = create({
  cartItems: cartItems,
  amount: 0,
  total: 0,
  increase: (itemId) =>
    set((state) => {
      return {
        cartItems: state.cartItems.map((cartItem) =>
          cartItem.id === itemId
            ? { ...cartItem, amount: cartItem.amount + 1 }
            : cartItem
        ),
      };
    }),
  decrease: (itemId) =>
    set((state) => {
      return {
        cartItems: state.cartItems.map((cartItem) =>
          cartItem.id === itemId
            ? { ...cartItem, amount: cartItem.amount - 1 }
            : cartItem
        ),
      };
    }),
  removeItem: (itemId) =>
    set((state) => {
      return {
        cartItems: state.cartItems.filter((cartItem) => cartItem.id !== itemId),
      };
    }),
  clearCart: () => set({ cartItems: [] }),
  calculateTotals: () =>
    set((state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      return {
        amount,
        total,
      };
    }),
});
