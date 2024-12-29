import React, {createContext, useContext, useEffect, useState} from 'react';
import {getProductById} from '../data/products';

interface CartItem {
    id: string;
    title: string;
    price: number;
    image: string;
    quantity: number;
}

interface CartContextType {
    items: CartItem[];
    addToCart: (productId: string) => void;
    removeFromCart: (productId: string) => void;
    updateQuantity: (productId: string, quantity: number) => void;
    getItemQuantity: (productId: string) => number;
    total: number;
}

const CartContext = createContext<CartContextType | null>(null);

const CART_STORAGE_KEY = 'cart_items';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
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
                        ? {...item, quantity: item.quantity + 1}
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
                item.id === productId ? {...item, quantity} : item
            )
        );
    };

    const getItemQuantity = (productId: string) => {
        return items.find(item => item.id === productId)?.quantity || 0;
    };

    const total = items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <CartContext.Provider value={{
            items,
            addToCart,
            removeFromCart,
            updateQuantity,
            getItemQuantity,
            total: parseFloat(total.toFixed(2))
        }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within CartProvider');
    }
    return context;
};