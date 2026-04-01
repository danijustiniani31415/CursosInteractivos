import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { PreguntaOpcionMultiple } from '../../../../models/Pregunta';
import styles from './OpcionMultiple.module.scss';

interface Props {
  pregunta: PreguntaOpcionMultiple;
  onResponder: (correcta: boolean) => void;
}

const OpcionMultiple: React.FC<Props> = ({ pregunta, onResponder }) => {
  const [seleccionada, setSeleccionada] = useState<number | null>(null);
  const [confirmada, setConfirmada] = useState(false);

  const handleSeleccionar = (index: number) => {
    if (confirmada) return;
    setSeleccionada(index);
  };

  const handleConfirmar = () => {
    if (seleccionada === null || confirmada) return;
    setConfirmada(true);
    setTimeout(() => {
      onResponder(seleccionada === pregunta.respuesta_correcta);
    }, 1200);
  };

  const getClase = (index: number) => {
    if (!confirmada) return seleccionada === index ? styles.seleccionada : styles.opcion;
    if (index === pregunta.respuesta_correcta) return styles.correcta;
    if (index === seleccionada) return styles.incorrecta;
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

      <div className={styles.opciones}>
        {pregunta.opciones.map((opcion, index) => (
          <button
            key={index}
            className={getClase(index)}
            onClick={() => handleSeleccionar(index)}
            disabled={confirmada}
          >
            <span className={styles.letra}>{String.fromCharCode(65 + index)}</span>
            <span>{opcion}</span>
          </button>
        ))}
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
              : `Incorrecto. La respuesta era: ${pregunta.opciones[pregunta.respuesta_correcta]}`}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default OpcionMultiple;
