import app from './app.js';
import { Config } from './config/index.js';
import logger from './config/logger.js';

const startServer = () => {
  const PORT = Config.PORT;

  try {
    app.listen(PORT, () => {
      logger.info('Server is running on port', { port: PORT });
      // logger.error('Server error...', {port: PORT});
    });
  } catch (err) {
    console.error('Error starting server: ', err);
    process.exit(1);
  }
};

startServer();
