import React, { useState } from 'react';
import './TresCuadrantes.scss';

interface Cuadrante {
  titulo: string;
  texto: string;
  descripcion: string;
  imagen: string;
}

interface Props {
  setOverlayActivo: (activo: boolean) => void;
  cuadrantes?: Cuadrante[];
}

const cuadrantesDefault: Cuadrante[] = [
  {
    titulo: 'Identificación de riesgos',
    texto: 'Aprende a identificar los puntos de riesgo en el uso de escaleras fijas.',
    descripcion: 'Las caídas en escaleras representan el 25% de los accidentes laborales. Identificar los puntos de riesgo es el primer paso para prevenirlos.',
    imagen: 'https://via.placeholder.com/300x180?text=Riesgos',
  },
  {
    titulo: 'Medidas preventivas',
    texto: 'Conoce las medidas de seguridad obligatorias para el trabajo en altura.',
    descripcion: 'El uso de EPI adecuado, la inspección previa del equipo y mantener tres puntos de apoyo son fundamentales para trabajar con seguridad.',
    imagen: 'https://via.placeholder.com/300x180?text=Prevención',
  },
  {
    titulo: 'Procedimiento seguro',
    texto: 'Sigue el protocolo establecido para el uso correcto de escaleras fijas.',
    descripcion: 'Antes de subir: verifica la escalera, asegura el área, usa el EPI. Durante el ascenso: tres puntos de apoyo, no sobrecargues, sube despacio.',
    imagen: 'https://via.placeholder.com/300x180?text=Procedimiento',
  },
];

const TresCuadrantes: React.FC<Props> = ({ setOverlayActivo, cuadrantes = cuadrantesDefault }) => {
  const [abierto, setAbierto] = useState<number | null>(null);

  const toggle = (index: number) => {
    const nuevo = abierto === index ? null : index;
    setAbierto(nuevo);
    setOverlayActivo(nuevo !== null);
  };

  return (
    <div className="tres-cuadrantes-container">
      <div className="tres-cuadrantes">
        {cuadrantes.map((item, idx) => (
          <div className="cuadrante" key={idx}>
            <h3 className="titulo">{item.titulo}</h3>
            <p className="texto">{item.texto}</p>
            <button className="boton-toggle" onClick={() => toggle(idx)}>
              {abierto === idx ? '×' : '+'}
            </button>
            {abierto === idx && (
              <div className="desplegable">
                <button className="boton-cerrar" onClick={() => toggle(idx)}>×</button>
                <img src={item.imagen} alt={`Imagen de ${item.titulo}`} />
                <p>{item.descripcion}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TresCuadrantes;
