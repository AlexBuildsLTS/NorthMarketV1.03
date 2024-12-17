import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';

const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
  });
  const [error, setError] = React.useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      await login(formData);
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <Button type="submit" fullWidth>Sign In</Button>
    </form>
  );
};

export default LoginForm;