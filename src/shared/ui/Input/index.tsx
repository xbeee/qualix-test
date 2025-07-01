import React from 'react';
import styles from './Input.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  error?: string;
  multiline?: boolean;
  className?: string;
}

const Input = ({
                 label,
                 error,
                 multiline = false,
                 className = '',
                 ...props
               }: InputProps) => {
  const inputClass = `${styles.input} ${error ? styles.error : ''} ${className}`;

  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      {multiline ? (
        <textarea
          className={`${inputClass} ${styles.textarea}`}
          {...props as React.TextareaHTMLAttributes<HTMLTextAreaElement>}
        />
      ) : (
        <input
          className={inputClass}
          {...props as React.InputHTMLAttributes<HTMLInputElement>}
        />
      )}
      {error && <span className={styles.errorMessage}>{error}</span>}
    </div>
  );
};

export default Input;