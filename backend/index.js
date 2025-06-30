const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 3000;

app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/course-sell')
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err.message);
  });

// Route imports
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');

// Use routes
app.use('/user', userRoutes);
app.use('/admin', adminRoutes);
