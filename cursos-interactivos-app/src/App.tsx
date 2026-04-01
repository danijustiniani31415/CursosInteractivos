import React, { useState, lazy, Suspense } from 'react';
import { FondoProvider } from './context/FondoContext';
import LayoutGlobal from './components/layout/LayoutGlobal';
import Loader from './components/ui/Loader/Loader';
import type { CursoID } from './utils/cursosDisponibles';
import './styles/global.scss';

const EscalerafijaCurso = lazy(() => import('./cursos/escalerafija'));
const CargamanualCurso = lazy(() => import('./cursos/cargamanual'));

const cursoComponents: Record<CursoID, React.LazyExoticComponent<React.FC<{ isDarkTheme: boolean }>>> = {
  escalerafija: EscalerafijaCurso,
  cargamanual: CargamanualCurso,
};

const cursosInfo: { id: CursoID; label: string }[] = [
  { id: 'escalerafija', label: 'Escaleras Fijas' },
  { id: 'cargamanual', label: 'Carga Manual' },
];

const App: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [cursoActivo, setCursoActivo] = useState<CursoID>('escalerafija');

  const CursoActivo = cursoComponents[cursoActivo];

  return (
    <FondoProvider>
      <LayoutGlobal isDarkTheme={isDarkTheme} onToggleTheme={() => setIsDarkTheme(prev => !prev)}>
        <div style={{
          position: 'absolute',
          top: '10px',
          right: '100px',
          zIndex: 50,
          display: 'flex',
          gap: '8px',
        }}>
          {cursosInfo.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setCursoActivo(id)}
              style={{
                padding: '6px 14px',
                borderRadius: '20px',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '0.85rem',
                background: cursoActivo === id ? 'var(--color-primario)' : 'rgba(0,93,157,0.15)',
                color: cursoActivo === id ? '#fff' : 'var(--color-primario)',
                transition: 'all 0.2s ease',
              }}
            >
              {label}
            </button>
          ))}
        </div>

        <Suspense fallback={<Loader />}>
          <CursoActivo isDarkTheme={isDarkTheme} />
        </Suspense>
      </LayoutGlobal>
    </FondoProvider>
  );
};

export default App;
