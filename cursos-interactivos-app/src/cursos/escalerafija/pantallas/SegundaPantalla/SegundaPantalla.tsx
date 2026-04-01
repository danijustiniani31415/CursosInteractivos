import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from './SegundaPantalla.module.scss';
import Button from '../../../../components/ui/Button/Button';
import { useFondo } from '../../../../context/FondoContext';
import CuadroInteractivo from '../../../../components/ui/CuadroInteractivo/CuadroInteractivo';
import Modal from '../../../../components/ui/Modal/Modal';
import muestra1 from '../../../../assets/image/Muestra1.png';

const SegundaPantalla: React.FC = () => {
  const { setFondoActivo } = useFondo();
  const [mostrarModal, setMostrarModal] = useState(false);

  useEffect(() => {
    setFondoActivo('escalerafijaSegundaPantalla');
  }, [setFondoActivo]);

  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <div className={styles.leftColumn}>
          <motion.h2
            className={styles.texto}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Nuestra Metodología de Enseñanza
          </motion.h2>
        </div>
        <div className={styles.rightColumn}>
          <motion.p
            className={styles.texto}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            En este curso interactivo, aprenderás mediante recursos visuales, ejemplos reales y dinámicas de participación activa.
          </motion.p>
          <Button ariaLabel="botón más información" onClick={() => setMostrarModal(true)}>
            + info
          </Button>
        </div>
      </div>

      <div className={styles.cuadroInteractivoWrapper}>
        <CuadroInteractivo
          curso="escalerafija"
          width="100%"
          height="auto"
          backgroundColor="rgba(0,93,157,0.3)"
          borderColor="white"
        />
      </div>

      <Modal
        isOpen={mostrarModal}
        onClose={() => setMostrarModal(false)}
        title="Nuestra Metodología"
        description="Combinamos teoría y práctica con elementos visuales y actividades interactivas para maximizar el aprendizaje."
        imageSrc={muestra1}
      />
    </div>
  );
};

export default SegundaPantalla;
