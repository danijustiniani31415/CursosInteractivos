import React from 'react';
import styles from './Loader.module.scss';

const Loader: React.FC = () => (
  <div className={styles.loaderWrapper}>
    <div className={styles.spinner}></div>
    <p className={styles.text}>Cargando contenido...</p>
  </div>
);

export default Loader;
