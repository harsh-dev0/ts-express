import express from 'express';
import dotenv from 'dotenv';
import { errorHandler } from './middleware/errorHandler';
import apiRoutes from './routes/api';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', apiRoutes);
app.get('/', (req, res) => {
  res.send('TypeScript Node.js Backend is running!');
});

app.use(errorHandler);
// Start server
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
