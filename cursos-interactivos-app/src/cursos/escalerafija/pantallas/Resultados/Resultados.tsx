import React from 'react';
import styles from './Resultados.module.scss';

interface ResultadosProps {
  total: number;
  aciertos: number;
  onReiniciar: () => void;
}

const Resultados: React.FC<ResultadosProps> = ({ total, aciertos, onReiniciar }) => {
  const correcto = aciertos === total;

  return (
    <div className={styles.resultadosContainer}>
      <h2 className={correcto ? styles.correcto : styles.incorrecto}>
        {correcto
          ? '¡Has acertado todas las preguntas!'
          : `Has acertado ${aciertos} de ${total} preguntas.`}
      </h2>
      <button className={styles.botonReiniciar} onClick={onReiniciar}>
        Reiniciar curso
      </button>
    </div>
  );
};

export default Resultados;
