import React from 'react';
import classNames from 'classnames';
import FondoPantalla from '../ui/FondoPantalla/FondoPantalla';
import Logo from '../Logo/Logo';
import ThemeToggle from '../ui/ThemeToggle/ThemeToggle';
import styles from './LayoutGlobal.module.scss';

interface LayoutGlobalProps {
  isDarkTheme: boolean;
  onToggleTheme: () => void;
  children: React.ReactNode;
}

const LayoutGlobal: React.FC<LayoutGlobalProps> = ({ isDarkTheme, onToggleTheme, children }) => (
  <div className={classNames(styles.appContainer, { 'modo-oscuro': isDarkTheme })}>
    <FondoPantalla isDarkTheme={isDarkTheme} />
    <div className={styles.logoTop}>
      <Logo isDarkTheme={isDarkTheme} />
    </div>
    <main className={styles.mainContent}>{children}</main>
    <div className={styles.themeToggleWrapper}>
      <ThemeToggle isDarkMode={isDarkTheme} onToggle={onToggleTheme} />
    </div>
  </div>
);

export default LayoutGlobal;
