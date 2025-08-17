import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/auth.js';
import { authMiddleware } from './middleware/auth.js';

dotenv.config();

console.log("MONGO_URI:", process.env.MONGO_URI); // debug line

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
});

// Define a simple route
app.get('/', (req, res) => {
    res.send('API RUnning')
})

app.use('/api/auth', authRoutes);

app.use('/api/protected', authMiddleware, (req, res) => {
  res.json({
    message: `Welcome back, ${req.user.email}! 👋`,
    user: req.user
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});