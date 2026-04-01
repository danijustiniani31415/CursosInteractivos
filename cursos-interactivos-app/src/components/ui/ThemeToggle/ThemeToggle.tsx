import React from 'react';
import styles from './ThemeToggle.module.scss';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  isDarkMode: boolean;
  onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDarkMode, onToggle }) => (
  <button
    onClick={onToggle}
    aria-label={isDarkMode ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
    className={`${styles.toggle} ${isDarkMode ? styles.dark : ''}`}
    type="button"
  >
    <div className={styles.icon} style={{ opacity: isDarkMode ? 0.3 : 1 }}>
      <Sun size={20} />
    </div>
    <div className={styles.icon} style={{ opacity: isDarkMode ? 1 : 0.3 }}>
      <Moon size={20} />
    </div>
    <div className={styles.thumb}></div>
  </button>
);

export default ThemeToggle;
