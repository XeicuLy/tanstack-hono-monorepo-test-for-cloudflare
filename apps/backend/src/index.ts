import { swaggerUI } from '@hono/swagger-ui';
import { OpenAPIHono } from '@hono/zod-openapi';
import consola from 'consola';
import { healthHandler } from './routes/health';

const app = new OpenAPIHono<{ Bindings: CloudflareBindings }>().basePath('/api');

healthHandler(app);

app.doc('/openapi.yaml', {
  openapi: '3.0.0',
  info: {
    title: 'Backend API',
    version: '1.0.0',
    description: ' Backend API for Cloudflare Workers using Hono and Zod OpenAPI',
  },
});
app.get('/swagger-ui', swaggerUI({ url: '/api/openapi.yaml' }));

consola.success('⚡️ Hono for Cloudflare Workers is running!');
consola.info('📄 Swagger UI: http://localhost:8787/api/swagger-ui');

export default app;
