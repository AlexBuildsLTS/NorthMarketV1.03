import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import corsOptions from './config/cors.js';
import sequelize from './config/database.js';
import authRoutes from './routes/auth.js';
import listingRoutes from './routes/listings.js';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection and sync
try {
  await sequelize.authenticate();
  console.log('Database connection established successfully.');
  
  if (process.env.NODE_ENV === 'development') {
    await sequelize.sync({ alter: true });
    console.log('Database models synchronized.');
  }
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/listings', listingRoutes);

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '../dist')));
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '../dist/index.html'));
  });
}

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
});

const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || 'localhost';

app.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});