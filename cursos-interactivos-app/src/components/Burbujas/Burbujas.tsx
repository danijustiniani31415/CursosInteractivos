import React from 'react';
import styles from './Burbujas.module.scss';

export interface BurbujaConfig {
  top: string;
  left: string;
  size: number;
  duration: string;
  delay: string;
  colors: [string, string];
  animationType: 'vertical' | 'scale' | 'fade' | 'oscilacion';
}

interface BurbujasProps {
  burbujas: BurbujaConfig[];
  modoOscuro?: boolean;
}

const Burbujas: React.FC<BurbujasProps> = ({ burbujas }) => {
  return (
    <>
      {burbujas.map((b, index) => (
        <div
          key={index}
          className={`${styles.burbuja} ${styles[b.animationType]}`}
          style={{
            top: b.top,
            left: b.left,
            width: b.size,
            height: b.size,
            animationDuration: b.duration,
            animationDelay: b.delay,
            background: `radial-gradient(circle at 30% 30%, ${b.colors[0]}, ${b.colors[1]})`,
          }}
        />
      ))}
    </>
  );
};

export default Burbujas;
