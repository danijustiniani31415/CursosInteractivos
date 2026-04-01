import React, { useState, Suspense } from 'react';
import Loader from '../../components/ui/Loader/Loader';
import TituloDualAnimado from '../../components/ui/TituloDualAnimado/TituloDualAnimado';
import FlechasNavegacion from '../../components/ui/FlechasNavegacion/FlechasNavegacion';
import Presentacion from './pantallas/Presentacion/Presentacion';
import SegundaPantalla from './pantallas/SegundaPantalla/SegundaPantalla';
import TerceraPantalla from './pantallas/TerceraPantalla/TerceraPantalla';
import CuartaPantalla from './pantallas/CuartaPantalla/CuartaPantalla';
import Resultados from './pantallas/Resultados/Resultados';

interface EscalerafijaProps {
  isDarkTheme: boolean;
}

const EscalerafijaCurso: React.FC<EscalerafijaProps> = ({ isDarkTheme }) => {
  const [pantalla, setPantalla] = useState(1);
  const [mostrarDesplegable, setMostrarDesplegable] = useState(false);
  const [resultado, setResultado] = useState<{ aciertos: number; total: number } | null>(null);

  const handleFinalizarPreguntas = (aciertos: number, total: number) => {
    setResultado({ aciertos, total });
    setPantalla(5);
  };

  const handleReiniciar = () => {
    setResultado(null);
    setPantalla(1);
  };

  const renderPantalla = () => {
    switch (pantalla) {
      case 1:
        return <Presentacion onIniciar={() => setPantalla(2)} />;

      case 2:
        return (
          <>
            <TituloDualAnimado key={pantalla} isDarkTheme={isDarkTheme} tituloIzquierdo="Escaleras fijas" tituloDerecho="Caída a distinto nivel" />
            <SegundaPantalla />
            <FlechasNavegacion isDarkMode={isDarkTheme} onAnteriorClick={() => setPantalla(1)} onSiguienteClick={() => setPantalla(3)} />
          </>
        );

      case 3:
        return (
          <>
            <TituloDualAnimado key={pantalla} isDarkTheme={isDarkTheme} tituloIzquierdo="Escaleras fijas" tituloDerecho="Medidas preventivas" />
            <TerceraPantalla
              onMostrarDesplegable={() => setMostrarDesplegable(true)}
              onOcultarDesplegable={() => setMostrarDesplegable(false)}
            />
            <FlechasNavegacion isDarkMode={isDarkTheme} onAnteriorClick={() => setPantalla(2)} onSiguienteClick={() => setPantalla(4)} />
          </>
        );

      case 4:
        return (
          <>
            <TituloDualAnimado key={pantalla} isDarkTheme={isDarkTheme} tituloIzquierdo="Escaleras fijas" tituloDerecho="Evaluación" />
            <CuartaPantalla onFinalizar={handleFinalizarPreguntas} />
          </>
        );

      case 5:
        return resultado ? (
          <Resultados aciertos={resultado.aciertos} total={resultado.total} onReiniciar={handleReiniciar} />
        ) : null;

      default:
        return null;
    }
  };

  return (
    <Suspense fallback={<Loader />}>
      <>
        {renderPantalla()}
        {mostrarDesplegable && (
          <div className="overlayGeneral" onClick={() => setMostrarDesplegable(false)} />
        )}
      </>
    </Suspense>
  );
};

export default EscalerafijaCurso;
