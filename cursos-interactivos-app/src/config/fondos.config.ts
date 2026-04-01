export interface Fondo {
  id: string;
  nombre: string;
  fondoClaro: string;
  fondoOscuro: string;
}

export const fondos: Record<string, Fondo> = {
  cargamanualPresentacion: {
    id: 'cargamanualPresentacion',
    nombre: 'Carga Manual - Presentación',
    fondoClaro: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    fondoOscuro: 'linear-gradient(135deg, #2c3e50 0%, #4ca1af 100%)',
  },
  cargamanualSegundaPantalla: {
    id: 'cargamanualSegundaPantalla',
    nombre: 'Carga Manual - Segunda Pantalla',
    fondoClaro: 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)',
    fondoOscuro: 'linear-gradient(135deg, #434343 0%, #000000 100%)',
  },
  cargamanualTerceraPantalla: {
    id: 'cargamanualTerceraPantalla',
    nombre: 'Carga Manual - Tercera Pantalla',
    fondoClaro: 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)',
    fondoOscuro: 'linear-gradient(135deg, #434343 0%, #000000 100%)',
  },
  escalerafijaPresentacion: {
    id: 'escalerafijaPresentacion',
    nombre: 'Escalera Fija - Presentación',
    fondoClaro: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
    fondoOscuro: 'linear-gradient(135deg, #283e51 0%, #485563 100%)',
  },
  escalerafijaSegundaPantalla: {
    id: 'escalerafijaSegundaPantalla',
    nombre: 'Escalera Fija - Segunda Pantalla',
    fondoClaro: 'linear-gradient(135deg, rgb(101, 246, 188) 0%, rgb(141, 253, 133) 100%)',
    fondoOscuro: 'linear-gradient(135deg, rgb(202, 209, 216) 0%, rgb(207, 210, 213) 100%)',
  },
  escalerafijaTerceraPantalla: {
    id: 'escalerafijaTerceraPantalla',
    nombre: 'Escalera Fija - Tercera Pantalla',
    fondoClaro: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    fondoOscuro: 'linear-gradient(135deg, #2c3e50 0%, #4ca1af 100%)',
  },
};
