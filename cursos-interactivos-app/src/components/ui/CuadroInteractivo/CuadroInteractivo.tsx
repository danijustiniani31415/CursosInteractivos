import React, { useState } from 'react';
import styles from './CuadroInteractivo.module.scss';
import muestra1 from '../../../assets/image/Muestra1.png';
import muestra2 from '../../../assets/image/muestra2.jpg';
import muestra3 from '../../../assets/image/muestra3.jpg';
import muestra4 from '../../../assets/image/muestra4.png';

interface CuadroInteractivoProps {
  curso: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
  borderColor?: string;
  className?: string;
  style?: React.CSSProperties;
}

const imagenesPorCurso: Record<string, string[]> = {
  escalerafija: [muestra1, muestra2, muestra3, muestra4],
  cargamanual: [muestra1, muestra2, muestra3, muestra4],
};

const CuadroInteractivo: React.FC<CuadroInteractivoProps> = ({
  curso,
  width = '500px',
  height = '500px',
  backgroundColor = 'var(--color-fondo-translucido)',
  borderColor = 'var(--color-acento)',
  className = '',
  style = {},
}) => {
  const [zoomImg, setZoomImg] = useState<string | null>(null);
  const imagenes = imagenesPorCurso[curso] ?? imagenesPorCurso['escalerafija'];

  return (
    <>
      <div
        className={`${styles.contenedorPrincipal} ${className}`}
        style={{ width, height, background: backgroundColor, border: `3px solid ${borderColor}`, ...style }}
      >
        <div className={styles.cuadrosGrid}>
          {imagenes.map((src, index) => (
            <div
              key={index}
              className={styles.cuadroNegro}
              onClick={() => setZoomImg(src)}
              tabIndex={0}
              role="button"
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setZoomImg(src); }}
            >
              <img src={src} alt={`Imagen ${index + 1}`} className={styles.imagen} />
              <div className={styles.hoverOverlay} />
            </div>
          ))}
        </div>
      </div>

      {zoomImg && (
        <div className={styles.zoomOverlay} onClick={() => setZoomImg(null)}>
          <img src={zoomImg} alt="Imagen ampliada" className={styles.zoomImage} />
        </div>
      )}
    </>
  );
};

export default CuadroInteractivo;
