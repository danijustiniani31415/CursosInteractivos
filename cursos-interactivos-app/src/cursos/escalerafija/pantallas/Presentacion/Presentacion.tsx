import React, { useEffect } from 'react';
import styles from './Presentacion.module.scss';
import { motion } from 'framer-motion';
import Button from '../../../../components/ui/Button/Button';
import { useFondo } from '../../../../context/FondoContext';
import { PlayCircle } from 'lucide-react';
import Burbujas, { type BurbujaConfig } from '../../../../components/Burbujas/Burbujas';

export interface PresentacionProps {
  onIniciar: () => void;
}

const burbujasConfig: BurbujaConfig[] = [
  { top: '15%', left: '10%', size: 100, duration: '2s', delay: '0s', colors: ['var(--burbuja-azul-1)', 'var(--burbuja-azul-2)'], animationType: 'oscilacion' },
  { top: '40%', left: '50%', size: 80, duration: '1s', delay: '1.5s', colors: ['var(--burbuja-azul-3)', 'var(--burbuja-azul-4)'], animationType: 'oscilacion' },
  { top: '70%', left: '80%', size: 60, duration: '1.5s', delay: '3s', colors: ['var(--burbuja-azul-oscuro)', 'var(--burbuja-azul-brillante)'], animationType: 'oscilacion' },
];

const Presentacion: React.FC<PresentacionProps> = ({ onIniciar }) => {
  const { setFondoActivo } = useFondo();

  useEffect(() => {
    setFondoActivo('escalerafijaPresentacion');
  }, [setFondoActivo]);

  return (
    <div className={styles.container} style={{ position: 'relative', overflow: 'hidden' }}>
      <Burbujas burbujas={burbujasConfig} modoOscuro={false} />
      <div className={styles.content} style={{ position: 'relative', zIndex: 2 }}>
        <motion.h1
          className={styles.titulo}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          ¡Escaleras fijas!
        </motion.h1>
        <motion.p
          className={styles.subtitulo}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Caídas a distinto nivel.
        </motion.p>
        <motion.div
          className={styles.botonCentrado}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <Button ariaLabel="botón iniciar" variant="success" iconLeft={<PlayCircle size={20} />} onClick={onIniciar}>
            Iniciar
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Presentacion;
