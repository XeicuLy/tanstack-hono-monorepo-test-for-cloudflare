import { queryOptions } from '@tanstack/react-query';
import { consola } from 'consola';
import type { GetApiHealthResponse } from '#shared/types/api/index.ts';

export const healthQueryOptions = () =>
  queryOptions({
    queryKey: ['health'],
    queryFn: async () => {
      try {
        const response = await fetch('http://localhost:8787/api/health');
        return response.json<GetApiHealthResponse>();
      } catch (error) {
        consola.error('Error fetching health data:', error);
        throw new Error('Failed to fetch health data', { cause: error });
      }
    },
  });
