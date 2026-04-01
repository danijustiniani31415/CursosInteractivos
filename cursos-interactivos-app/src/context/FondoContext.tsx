import React, { createContext, useState, useContext, type ReactNode } from 'react';
import { fondos } from '../config/fondos.config';

interface FondoContextProps {
  fondoActivo: string | null;
  setFondoActivo: (id: string) => void;
}

const FondoContext = createContext<FondoContextProps>({
  fondoActivo: null,
  setFondoActivo: () => {},
});

export const FondoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [fondoActivo, setFondoActivoState] = useState<string | null>(null);

  const setFondoActivo = (id: string) => {
    if (fondos[id]) {
      setFondoActivoState(id);
    } else {
      setFondoActivoState(null);
    }
  };

  return (
    <FondoContext.Provider value={{ fondoActivo, setFondoActivo }}>
      {children}
    </FondoContext.Provider>
  );
};

export const useFondo = () => useContext(FondoContext);
