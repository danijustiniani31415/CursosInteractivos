import React from 'react';
import type { Pregunta } from '../../../../models/Pregunta';
import OpcionMultiple from '../OpcionMultiple/OpcionMultiple';
import VerdaderoFalso from '../VerdaderoFalso/VerdaderoFalso';

interface Props {
  pregunta: Pregunta;
  onResponder: (correcta: boolean) => void;
}

const PreguntaActual: React.FC<Props> = ({ pregunta, onResponder }) => {
  switch (pregunta.tipo) {
    case 'opcionMultiple':
      return <OpcionMultiple pregunta={pregunta} onResponder={onResponder} />;
    case 'verdaderoFalso':
      return <VerdaderoFalso pregunta={pregunta} onResponder={onResponder} />;
    default:
      return (
        <div style={{ color: 'var(--color-texto)', textAlign: 'center', padding: '2rem' }}>
          Tipo de pregunta no soportado aún: <strong>{pregunta.tipo}</strong>
        </div>
      );
  }
};

export default PreguntaActual;
