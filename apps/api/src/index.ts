import express, { type Request, type Response } from 'express';
import { log } from '@repo/logger';
const app = express();

// Home route - HTML
app.get('/', (req, res) => {
  log('Home route accessed');
  res.json({
      message: 'Here is some sample API data',
      items: ['apple', 'banana', 'cherry']
  });
});

// Example API endpoint - JSON
app.get('/api-data', (req, res) => {
  log('API data requested');
  res.json({
      message: 'Here is some sample API data',
      items: ['apple', 'banana', 'cherry']
  });
});

// Health check
app.get('/health', (req, res) => {
  log('Health check');
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

export default app;