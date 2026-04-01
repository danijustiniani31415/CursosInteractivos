import React from 'react';

interface CargamanualProps {
  isDarkTheme: boolean;
}

const CargamanualCurso: React.FC<CargamanualProps> = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '70vh',
      color: 'var(--letra-titulo)',
      textAlign: 'center',
      gap: '1rem',
    }}>
      <h2 style={{ fontSize: '2rem' }}>Carga Manual</h2>
      <p style={{ fontSize: '1.2rem', opacity: 0.8 }}>Curso en desarrollo. Próximamente disponible.</p>
    </div>
  );
};

export default CargamanualCurso;
