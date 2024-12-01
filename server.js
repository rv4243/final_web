const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');  // Import the MongoDB connection function

const app = express();

// Connect to MongoDB (calling the connectDB function here)
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
const authRoutes = require('./routes/authRoutes');  // Import authentication routes
app.use('/api', authRoutes);  // Use the routes

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
