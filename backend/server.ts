import 'dotenv/config';
import app from './app';
import connectDB from './config/db.config';

const PORT = process.env.PORT || 4000;

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Slamma server is running at http://localhost:${PORT}`);
  });
}

startServer();