import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, User } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';

const RegisterForm = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    password: '',
    isSeller: false,
  });
  const [error, setError] = React.useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      await register(formData);
      navigate('/dashboard');
    } catch (err) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Input
          icon={<User className="w-5 h-5" />}
          type="text"
          placeholder="Full name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </div>
      <div>
        <Input
          icon={<Mail className="w-5 h-5" />}
          type="email"
          placeholder="Email address"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </div>
      <div>
        <Input
          icon={<Lock className="w-5 h-5" />}
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
        />
      </div>
      <div className="flex items-center">
        <input
          type="checkbox"
          id="isSeller"
          checked={formData.isSeller}
          onChange={(e) => setFormData({ ...formData, isSeller: e.target.checked })}
          className="rounded border-gray-300 text-emerald-500 focus:ring-emerald-500"
        />
        <label htmlFor="isSeller" className="ml-2 text-sm text-gray-300">
          I want to sell on NorthMarket
        </label>
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <Button type="submit" fullWidth>Create Account</Button>
    </form>
  );
};

export default RegisterForm;