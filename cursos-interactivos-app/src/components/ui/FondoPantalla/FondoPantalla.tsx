import React from 'react';
import { useFondo } from '../../../context/FondoContext';
import { fondos } from '../../../config/fondos.config';
import styles from './FondoPantalla.module.scss';

interface FondoPantallaProps {
  isDarkTheme: boolean;
}

const FondoPantalla: React.FC<FondoPantallaProps> = ({ isDarkTheme }) => {
  const { fondoActivo } = useFondo();
  const fondo = fondoActivo ? fondos[fondoActivo] : null;

  return (
    <div
      className={styles.fondoPantalla}
      style={{
        background: fondo
          ? isDarkTheme ? fondo.fondoOscuro : fondo.fondoClaro
          : undefined,
      }}
    />
  );
};

export default FondoPantalla;
