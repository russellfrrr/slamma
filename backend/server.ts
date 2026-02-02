import app from './app';

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Slamma server is running at http://localhost:${PORT}`);
});