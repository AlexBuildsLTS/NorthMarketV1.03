import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { items, total, clearCart } = useCart();
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    address: '',
    city: '',
    country: '',
    cardNumber: '',
    expiry: '',
    cvc: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Here you would integrate with your payment processor
      // For now, we'll just simulate a successful payment
      await new Promise(resolve => setTimeout(resolve, 1000));
      clearCart();
      navigate('/checkout/success');
    } catch (error) {
      console.error('Payment failed:', error);
    }
  };

  if (items.length === 0) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-white mb-8">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="bg-navy-800 p-6 rounded-lg space-y-4">
                <h2 className="text-xl font-semibold text-white mb-4">Contact Information</h2>
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
                <Input
                  type="text"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="bg-navy-800 p-6 rounded-lg space-y-4">
                <h2 className="text-xl font-semibold text-white mb-4">Shipping Address</h2>
                <Input
                  type="text"
                  placeholder="Address"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  required
                />
                <Input
                  type="text"
                  placeholder="City"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  required
                />
                <Input
                  type="text"
                  placeholder="Country"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  required
                />
              </div>

              <div className="bg-navy-800 p-6 rounded-lg space-y-4">
                <h2 className="text-xl font-semibold text-white mb-4">Payment Information</h2>
                <Input
                  type="text"
                  placeholder="Card Number"
                  value={formData.cardNumber}
                  onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                  required
                />
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    type="text"
                    placeholder="MM/YY"
                    value={formData.expiry}
                    onChange={(e) => setFormData({ ...formData, expiry: e.target.value })}
                    required
                  />
                  <Input
                    type="text"
                    placeholder="CVC"
                    value={formData.cvc}
                    onChange={(e) => setFormData({ ...formData, cvc: e.target.value })}
                    required
                  />
                </div>
              </div>

              <Button type="submit" fullWidth>
                Pay ${total}
              </Button>
            </form>
          </div>

          <div>
            <div className="bg-navy-800 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-white mb-4">Order Summary</h2>
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <div>
                      <p className="text-white">{item.title}</p>
                      <p className="text-sm text-gray-400">Quantity: {item.quantity}</p>
                    </div>
                    <p className="text-white">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
                <div className="border-t border-navy-700 pt-4 mt-4">
                  <div className="flex justify-between text-white">
                    <span>Subtotal</span>
                    <span>${total}</span>
                  </div>
                  <div className="flex justify-between text-white mt-2">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between text-white font-bold mt-4">
                    <span>Total</span>
                    <span>${total}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;