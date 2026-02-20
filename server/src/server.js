import dotenv from 'dotenv';
import app from './app.js';
import db from './config/db.config.js';

dotenv.config();

const PORT = process.env.PORT || 4444;

const startServer = async () => {
  await db();

  app.listen(PORT, () => {
    console.log(`The server is available at http://localhost:${PORT}`);
  });
};

startServer();