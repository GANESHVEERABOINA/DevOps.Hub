import app from './app';
import { AppDataSource } from './config/database';
import logger from './config/logger';

const PORT = process.env.PORT || 5000;

AppDataSource.initialize()
  .then(() => {
    logger.info('Database connected');
    app.listen(PORT, () => {
      logger.info(`Server running on port ${PORT}`);
    });
  })
  .catch((error: Error) => {
    logger.error('Database connection error:', error);
  });