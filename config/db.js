const mongoose = require('mongoose');

// MongoDB connection function
const connectDB = async () => {
  try {
    // Connect to MongoDB Atlas
    await mongoose.connect('mongodb+srv://<username>:<password>@cluster0.mongodb.net/ecommerce', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

module.exports = connectDB;
