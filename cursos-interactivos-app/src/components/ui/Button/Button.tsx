import React from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  ariaLabel?: string;
  variant?: 'primary' | 'secondary' | 'success' | 'danger';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  ariaLabel,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  iconLeft,
  iconRight,
  className,
  ...props
}) => {
  return (
    <button
      aria-label={ariaLabel}
      className={clsx(styles.button, styles[variant], styles[size], { [styles.fullWidth]: fullWidth }, className)}
      {...props}
    >
      {iconLeft && <span className={styles.iconLeft}>{iconLeft}</span>}
      <span className={styles.label}>{children}</span>
      {iconRight && <span className={styles.iconRight}>{iconRight}</span>}
    </button>
  );
};

export default Button;
