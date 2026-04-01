export const cursosDisponibles = {
  escalerafija: () => import('../cursos/escalerafija'),
  cargamanual: () => import('../cursos/cargamanual'),
};

export type CursoID = keyof typeof cursosDisponibles;
