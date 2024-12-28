import { useState, useEffect } from 'react';
import { getProductById } from '../data/products';

const CART_STORAGE_KEY = 'cart_items';

export const useCart = () => {
  const [items, setItems] = useState<CartItem[]>(() => {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addToCart = (productId: string) => {
    const product = getProductById(productId);
    if (!product) return;

    setItems(current => {
      const existing = current.find(item => item.id === productId);
      if (existing) {
        return current.map(item =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...current, {
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.images[0],
        quantity: 1
      }];
    });
  };

  const removeFromCart = (productId: string) => {
    setItems(current => current.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }
    setItems(current =>
      current.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return {
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    total: parseFloat(total.toFixed(2))
  };
};