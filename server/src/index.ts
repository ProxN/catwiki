import express, { Application, Request, Response, NextFunction } from 'express';
import catRoutes from './api/cat/cat.routes';

const app: Application = express();

app.use('/api/v1/breeds', catRoutes);

/* Global Error handler */
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(400).json({
    status: 'fail',
    message: err.message,
  });
});

app.get('*', (req: Request, res: Response) => {
  res.status(404).json({
    status: 'fail',
    message: `You just hit a route (${req.originalUrl}) that doesn't exist... the sadness.`,
  });
});

export default app;
