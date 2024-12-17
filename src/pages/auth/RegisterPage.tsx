import React from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from '../../components/auth/RegisterForm';

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">Create an account</h2>
          <p className="mt-2 text-gray-400">Join our marketplace today</p>
        </div>
        <div className="bg-navy-800 p-8 rounded-lg shadow-lg">
          <RegisterForm />
          <div className="mt-4 text-center text-sm">
            <span className="text-gray-400">Already have an account? </span>
            <Link to="/login" className="text-emerald-500 hover:text-emerald-400">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;