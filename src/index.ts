import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { errorHandler } from './middleware/errorHandler';
import apiRoutes from './routes/api';
import { config } from './config/config';
import userRoutes from './routes/userRoutes';

// Load environment variables
const app = express();
const PORT = config.PORT;
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', apiRoutes);
app.use('/api/users', userRoutes);
app.get('/', (req, res) => {
  res.send('TypeScript Node.js Backend is running!');
});

app.use(errorHandler);
// Start server
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
