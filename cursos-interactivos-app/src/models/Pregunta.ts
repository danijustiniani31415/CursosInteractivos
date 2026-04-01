export type TipoPregunta = 'opcionMultiple' | 'dragDrop' | 'verdaderoFalso' | 'completarTexto';

export interface PreguntaBase {
  id: string;
  curso_id: string;
  tipo: TipoPregunta;
  texto: string;
  orden: number;
}

export interface PreguntaOpcionMultiple extends PreguntaBase {
  tipo: 'opcionMultiple';
  opciones: string[];
  respuesta_correcta: number;
}

export interface PreguntaVerdaderoFalso extends PreguntaBase {
  tipo: 'verdaderoFalso';
  respuesta_correcta: boolean;
}

export interface PreguntaDragDrop extends PreguntaBase {
  tipo: 'dragDrop';
  opciones: string[];
  respuesta_correcta: string[];
}

export interface PreguntaCompletarTexto extends PreguntaBase {
  tipo: 'completarTexto';
  texto_con_blancos: string;
  respuesta_correcta: string[];
}

export type Pregunta =
  | PreguntaOpcionMultiple
  | PreguntaVerdaderoFalso
  | PreguntaDragDrop
  | PreguntaCompletarTexto;
