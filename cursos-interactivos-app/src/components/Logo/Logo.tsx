import React from 'react';
import styles from './Logo.module.scss';
import azul from '../../assets/image/azul.png';
import blanco from '../../assets/image/blanco.png';

export interface LogoProps {
  isDarkTheme: boolean;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ isDarkTheme, size = 'large', className = '' }) => {
  const logoSrc = isDarkTheme ? blanco : azul;

  return (
    <div className={`${styles.logoContainer} ${styles[size]} ${className}`}>
      <img src={logoSrc} alt="Logo" className={styles.logo} draggable={false} />
    </div>
  );
};

export default Logo;
