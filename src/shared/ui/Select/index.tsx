// shared/ui/Select/index.tsx
import React from 'react';
import styles from './Select.module.scss';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[];
  label?: string;
  error?: string;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, label, error, className = '', ...props }, ref) => {
    return (
      <div className={styles.container}>
        {label && <label className={styles.label}>{label}</label>}
        <select
          ref={ref}
          className={`${styles.select} ${error ? styles.error : ''} ${className}`}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && <span className={styles.errorMessage}>{error}</span>}
      </div>
    );
  }
);

export default Select;