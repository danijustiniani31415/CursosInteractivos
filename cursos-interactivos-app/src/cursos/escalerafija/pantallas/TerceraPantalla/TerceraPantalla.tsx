import React, { useEffect } from 'react';
import { useFondo } from '../../../../context/FondoContext';
import styles from './TerceraPantalla.module.scss';
import TresCuadrantes from '../../../../components/ui/TresCuadrantes/TresCuadrantes';

interface TerceraPantallaProps {
  onMostrarDesplegable: () => void;
  onOcultarDesplegable: () => void;
}

const TerceraPantalla: React.FC<TerceraPantallaProps> = ({ onMostrarDesplegable, onOcultarDesplegable }) => {
  const { setFondoActivo } = useFondo();

  useEffect(() => {
    setFondoActivo('escalerafijaTerceraPantalla');
  }, [setFondoActivo]);

  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>
        Describe el tema y los contenidos que vas a tratar y por qué el tema es importante
      </h2>
      <TresCuadrantes setOverlayActivo={(activo) => activo ? onMostrarDesplegable() : onOcultarDesplegable()} />
    </div>
  );
};

export default TerceraPantalla;
