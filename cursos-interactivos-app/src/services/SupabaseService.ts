import { supabase } from '../lib/supabase';
import type { Pregunta } from '../models/Pregunta';

export interface ResultadoCurso {
  usuario_email: string;
  usuario_nombre: string;
  curso_id: string;
  total: number;
  aciertos: number;
}

const SupabaseService = {
  async getPreguntasPorCurso(cursoSlug: string): Promise<Pregunta[]> {
    const { data: curso, error: cursosError } = await supabase
      .from('cursos')
      .select('id')
      .eq('slug', cursoSlug)
      .single();

    if (cursosError || !curso) {
      console.error('Error al obtener el curso:', cursosError);
      return [];
    }

    const { data, error } = await supabase
      .from('preguntas')
      .select('*')
      .eq('curso_id', curso.id)
      .order('orden', { ascending: true });

    if (error) {
      console.error('Error al obtener preguntas:', error);
      return [];
    }

    return (data ?? []) as Pregunta[];
  },

  async guardarResultado(resultado: ResultadoCurso): Promise<void> {
    const { data: curso, error: cursosError } = await supabase
      .from('cursos')
      .select('id')
      .eq('slug', resultado.curso_id)
      .single();

    if (cursosError || !curso) {
      console.error('Error al obtener curso para resultado:', cursosError);
      return;
    }

    const { error } = await supabase.from('resultados').insert({
      usuario_email: resultado.usuario_email,
      usuario_nombre: resultado.usuario_nombre,
      curso_id: curso.id,
      total: resultado.total,
      aciertos: resultado.aciertos,
    });

    if (error) {
      console.error('Error al guardar resultado:', error);
    }
  },

  async getCursos() {
    const { data, error } = await supabase
      .from('cursos')
      .select('*')
      .eq('activo', true)
      .order('created_at', { ascending: true });

    if (error) {
      console.error('Error al obtener cursos:', error);
      return [];
    }

    return data ?? [];
  },
};

export default SupabaseService;
