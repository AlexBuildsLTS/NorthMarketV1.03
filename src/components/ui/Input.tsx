import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({ icon, className = '', ...props }) => {
  return (
    <div className="relative">
      {icon && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
          {icon}
        </div>
      )}
      <input
        className={`w-full bg-navy-800 border border-navy-700 text-white rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 block pl-10 p-2.5 ${className}`}
        {...props}
      />
    </div>
  );
};