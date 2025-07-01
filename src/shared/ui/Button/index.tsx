import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'outline';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
}

const Button = ({
                  variant = 'primary',
                  size = 'medium',
                  children,
                  className = '',
                  ...props
                }: ButtonProps) => {
  const variantClass = styles[`button${variant.charAt(0).toUpperCase() + variant.slice(1)}`];
  const sizeClass = styles[`button${size.charAt(0).toUpperCase() + size.slice(1)}`];

  return (
    <button
      className={`${styles.button} ${variantClass} ${sizeClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;