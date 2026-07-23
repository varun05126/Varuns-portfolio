require('dotenv').config();
const express = require('express');
const path = require('path');
const connectDB = require('./config/db');
const cors = require('cors');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.set('trust proxy', 1);

// Connect to MongoDB
connectDB();

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Middleware
app.use(cors());
app.use(express.json({ extended: false }));

// Define routes
app.use('/api/projects', require('./routes/projects'));
app.use('/api/skills', require('./routes/skills'));
app.use('/api/contact', require('./routes/contact'));

const frontendDistPath = path.join(__dirname, '..', 'frontend', 'dist');

app.use(express.static(frontendDistPath));

app.get(/^(?!\/api).*/, (req, res) => {
  res.sendFile(path.join(frontendDistPath, 'index.html'));
});

// Error handling middleware (must be last)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
