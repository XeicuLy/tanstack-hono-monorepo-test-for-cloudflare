import { env } from 'cloudflare:workers';
import { queryOptions } from '@tanstack/react-query';
import { createServerFn } from '@tanstack/react-start';
import consola from 'consola';
import type { GetApiHealthResponse } from '#shared/types/api/index.ts';

const getHealthApi = createServerFn().handler(async () => {
  try {
    const response = import.meta.env.DEV
      ? await fetch('http://localhost:8787/api/health')
      : await env.BACKEND_API_ENDPOINT.fetch('/api/health');
    return await response.json<GetApiHealthResponse>();
  } catch (error) {
    consola.error('Error fetching health data:', error);
    throw new Error('Failed to fetch health data', { cause: error });
  }
});

export const healthQueryOptions = () =>
  queryOptions({
    queryKey: ['health'],
    queryFn: getHealthApi,
    retry: false,
  });
