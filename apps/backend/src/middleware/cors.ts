import { cors } from 'hono/cors';

export const corsMiddleware = cors({
  origin: 'http://localhost:3000',
  credentials: true,
  allowMethods: ['GET', 'POST'],
  allowHeaders: ['Content-Type', 'Authorization'],
  maxAge: 86400,
});
