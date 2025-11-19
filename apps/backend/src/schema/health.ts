import { z } from '@hono/zod-openapi';

export const healthResponseSuccessSchema = z.object({
  timestamp: z.iso.datetime().openapi({ example: new Date().toISOString() }),
});
