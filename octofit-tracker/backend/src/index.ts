import { connectDatabase } from './config/database.js';
import app, { baseUrl, port } from './server.js';

try {
  await connectDatabase();
  console.log('Connected to octofit_db');
  app.listen(port, () => {
    console.log(`OctoFit API listening at ${baseUrl}`);
  });
} catch (error) {
  console.error('Unable to start OctoFit API:', error);
  process.exitCode = 1;
}