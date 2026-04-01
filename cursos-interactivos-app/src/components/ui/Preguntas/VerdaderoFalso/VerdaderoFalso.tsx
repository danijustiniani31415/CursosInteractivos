import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { PreguntaVerdaderoFalso } from '../../../../models/Pregunta';
import styles from './VerdaderoFalso.module.scss';

interface Props {
  pregunta: PreguntaVerdaderoFalso;
  onResponder: (correcta: boolean) => void;
}

const VerdaderoFalso: React.FC<Props> = ({ pregunta, onResponder }) => {
  const [seleccionada, setSeleccionada] = useState<boolean | null>(null);
  const [confirmada, setConfirmada] = useState(false);

  const handleSeleccionar = (valor: boolean) => {
    if (confirmada) return;
    setSeleccionada(valor);
  };

  const handleConfirmar = () => {
    if (seleccionada === null || confirmada) return;
    setConfirmada(true);
    setTimeout(() => {
      onResponder(seleccionada === pregunta.respuesta_correcta);
    }, 1200);
  };

  const getClase = (valor: boolean) => {
    if (!confirmada) return seleccionada === valor ? styles.seleccionada : styles.opcion;
    if (valor === pregunta.respuesta_correcta) return styles.correcta;
    if (valor === seleccionada) return styles.incorrecta;
    return styles.opcion;
  };

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className={styles.texto}>{pregunta.texto}</h3>

      <div className={styles.botones}>
        <button className={`${getClase(true)} ${styles.verdadero}`} onClick={() => handleSeleccionar(true)} disabled={confirmada}>
          ✓ Verdadero
        </button>
        <button className={`${getClase(false)} ${styles.falso}`} onClick={() => handleSeleccionar(false)} disabled={confirmada}>
          ✗ Falso
        </button>
      </div>

      <AnimatePresence>
        {seleccionada !== null && !confirmada && (
          <motion.button
            className={styles.botonConfirmar}
            onClick={handleConfirmar}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
          >
            Confirmar respuesta
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {confirmada && (
          <motion.p
            className={seleccionada === pregunta.respuesta_correcta ? styles.feedbackCorrecto : styles.feedbackIncorrecto}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {seleccionada === pregunta.respuesta_correcta
              ? '¡Correcto! ✓'
              : `Incorrecto. La respuesta correcta era: ${pregunta.respuesta_correcta ? 'Verdadero' : 'Falso'}`}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default VerdaderoFalso;
