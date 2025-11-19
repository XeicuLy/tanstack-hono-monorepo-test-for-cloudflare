import { createRoute, type OpenAPIHono } from '@hono/zod-openapi';
import status from 'http-status';
import { healthResponseSuccessSchema } from '../schema/health';

const healthRoute = createRoute({
  method: 'get',
  path: '/health',
  tags: ['System'],
  summary: 'Health Check',
  description: 'APIサーバーが適切に稼働しているかを確認するためのエンドポイント。',
  responses: {
    [status.OK]: {
      description: status['200_MESSAGE'],
      content: { 'application/json': { schema: healthResponseSuccessSchema } },
    },
  },
});

export const healthHandler = (app: OpenAPIHono<{ Bindings: CloudflareBindings }>) => {
  app.openapi(healthRoute, (c) => {
    return c.json({ timestamp: new Date().toISOString() });
  });
};
