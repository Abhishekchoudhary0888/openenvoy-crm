import React from 'react';
import './Input.css';

export interface InputProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'search';
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  error?: boolean;
  size?: 'small' | 'medium' | 'large';
  className?: string;
  id?: string;
  name?: string;
}

export const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  disabled = false,
  error = false,
  size = 'medium',
  className = '',
  id,
  name,
}) => {
  const inputClass = `input input-${size} ${error ? 'input-error' : ''} ${className}`.trim();

  return (
    <input
      id={id}
      name={name}
      type={type}
      className={inputClass}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      disabled={disabled}
    />
  );
};
