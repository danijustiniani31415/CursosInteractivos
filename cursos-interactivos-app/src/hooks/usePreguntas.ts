import { useState, useEffect } from 'react';
import SupabaseService from '../services/SupabaseService';
import type { Pregunta } from '../models/Pregunta';

interface UsePreguntasResult {
  preguntas: Pregunta[];
  loading: boolean;
  error: string | null;
}

export const usePreguntas = (cursoSlug: string): UsePreguntasResult => {
  const [preguntas, setPreguntas] = useState<Pregunta[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelado = false;

    const cargar = async () => {
      setLoading(true);
      setError(null);
      try {
        const datos = await SupabaseService.getPreguntasPorCurso(cursoSlug);
        if (!cancelado) setPreguntas(datos);
      } catch {
        if (!cancelado) setError('No se pudieron cargar las preguntas.');
      } finally {
        if (!cancelado) setLoading(false);
      }
    };

    cargar();
    return () => { cancelado = true; };
  }, [cursoSlug]);

  return { preguntas, loading, error };
};
