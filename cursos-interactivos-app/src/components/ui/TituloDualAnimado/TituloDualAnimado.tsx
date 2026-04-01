import React from 'react';
import styles from './TituloDualAnimado.module.scss';

interface TituloDualAnimadoProps {
  tituloIzquierdo: string;
  tituloDerecho: string;
  isDarkTheme?: boolean;
}

const TituloDualAnimado: React.FC<TituloDualAnimadoProps> = ({ tituloIzquierdo, tituloDerecho }) => (
  <div className={styles.contenedor}>
    <div className={styles.filaTitulos}>
      <span className={styles.textoIzquierdo}>{tituloIzquierdo}</span>
      <span className={styles.textoDerecho}>{tituloDerecho}</span>
    </div>
    <div className={styles.lineaAnimada}></div>
  </div>
);

export default TituloDualAnimado;
