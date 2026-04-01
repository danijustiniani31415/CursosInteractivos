import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useFondo } from '../../../../context/FondoContext';
import { usePreguntas } from '../../../../hooks/usePreguntas';
import PreguntaActual from '../../../../components/ui/Preguntas/PreguntaActual/PreguntaActual';
import Loader from '../../../../components/ui/Loader/Loader';
import SupabaseService from '../../../../services/SupabaseService';
import styles from './CuartaPantalla.module.scss';

interface CuartaPantallaProps {
  onFinalizar: (aciertos: number, total: number) => void;
}

const CuartaPantalla: React.FC<CuartaPantallaProps> = ({ onFinalizar }) => {
  const { setFondoActivo } = useFondo();
  const { preguntas, loading, error } = usePreguntas('escalerafija');
  const [indice, setIndice] = useState(0);
  const [aciertos, setAciertos] = useState(0);

  useEffect(() => {
    setFondoActivo('escalerafijaTerceraPantalla');
  }, [setFondoActivo]);

  const handleResponder = async (correcta: boolean) => {
    const nuevosAciertos = correcta ? aciertos + 1 : aciertos;
    const esUltima = indice === preguntas.length - 1;

    if (correcta) setAciertos(prev => prev + 1);

    if (esUltima) {
      await SupabaseService.guardarResultado({
        usuario_email: 'anonimo@cursos.com',
        usuario_nombre: 'Usuario',
        curso_id: 'escalerafija',
        total: preguntas.length,
        aciertos: nuevosAciertos,
      });
      setTimeout(() => onFinalizar(nuevosAciertos, preguntas.length), 800);
    } else {
      setTimeout(() => setIndice(prev => prev + 1), 1000);
    }
  };

  if (loading) return <Loader />;

  if (error || preguntas.length === 0) {
    return (
      <div className={styles.sinPreguntas}>
        <p>⚠️ No hay preguntas disponibles para este curso.</p>
        <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>
          Agrega preguntas en Supabase → tabla <strong>preguntas</strong>
        </p>
        <button className={styles.btnSaltar} onClick={() => onFinalizar(0, 0)}>
          Finalizar curso
        </button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {/* Progreso */}
      <div className={styles.progreso}>
        <div className={styles.barraFondo}>
          <motion.div
            className={styles.barraRelleno}
            initial={{ width: 0 }}
            animate={{ width: `${((indice) / preguntas.length) * 100}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
        <span className={styles.contador}>
          Pregunta {indice + 1} de {preguntas.length}
        </span>
      </div>

      {/* Pregunta actual */}
      <AnimatePresence mode="wait">
        <motion.div
          key={indice}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.35 }}
        >
          <PreguntaActual
            pregunta={preguntas[indice]}
            onResponder={handleResponder}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default CuartaPantalla;
