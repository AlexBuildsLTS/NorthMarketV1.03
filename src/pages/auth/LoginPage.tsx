import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../../components/auth/LoginForm';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">Welcome back</h2>
          <p className="mt-2 text-gray-400">Sign in to your account</p>
        </div>
        <div className="bg-navy-800 p-8 rounded-lg shadow-lg">
          <LoginForm />
          <div className="mt-4 text-center text-sm">
            <span className="text-gray-400">Don't have an account? </span>
            <Link to="/register" className="text-emerald-500 hover:text-emerald-400">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;