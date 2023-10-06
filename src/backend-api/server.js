// Import required modules
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const rateLimit = require('express-rate-limit');
const { v4: uuidv4 } = require('uuid');
const path = require('path'); // Import the 'path' module

// Initialize Express app and set port
const app = express();
const port = 3001;

// Apply middleware
app.use(cors());
app.use(express.json());

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Configure rate limiting
const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use(rateLimiter);

// Connect to MongoDB
mongoose
  .connect('mongodb://localhost:27017/yourDatabaseName', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
    populateDB(); // Call the function to populate the database
  })
  .catch((err) => console.error('Failed to connect to MongoDB:', err));

// Define Mongoose schemas and models
const ReviewSchema = new mongoose.Schema({
  id: { type: String, unique: true },
  rating: { type: Number, min: 1, max: 5 },
  comment: String,
});

const ProductSchema = new mongoose.Schema({
  id: { type: String, unique: true },
  name: String,
  icon: String,
  description: String,
  reviews: [ReviewSchema],
});

const ProductModel = mongoose.model('Product', ProductSchema);

// Function to populate MongoDB with sample data
const populateDB = async () => {
  const count = await ProductModel.countDocuments({});
  if (count === 0) {
    const sampleProducts = [
    { id: uuidv4(), name: 'Assignment Helper', icon: 'Assignment Helper.png', description: 'Automates the process of managing and scheduling your assignments.', reviews: sampleReviews },
    { id: uuidv4(), name: 'Note Organizer', icon: 'Note Organizer.png', description: 'Keeps your notes organized and easily searchable.', reviews: sampleReviews },
    { id: uuidv4(), name: 'Time Tracker', icon: 'Time Tracker.png', description: 'Helps you manage your time effectively with study and break intervals.', reviews: sampleReviews },
    { id: uuidv4(), name: 'Flashcard Maker', icon: 'Flashcard Maker.png', description: 'Create digital flashcards for quick and effective study sessions.', reviews: sampleReviews },
    { id: uuidv4(), name: 'Essay Editor', icon: 'Essay Editor.png', description: 'Provides real-time grammar and style checks for your essays.', reviews: sampleReviews },
    { id: uuidv4(), name: 'Math Solver', icon: 'Math Solver.png', description: 'Solves complex math problems and explains the solutions step-by-step.', reviews: sampleReviews },
    { id: uuidv4(), name: 'Code Compiler', icon: 'Code Compiler.png', description: 'Compile and run code in multiple languages with built-in debugging.', reviews: sampleReviews },
    { id: uuidv4(), name: 'Reading Assistant', icon: 'Reading Assistant.png', description: 'Enhances your reading experience with summaries and vocabulary assistance.', reviews: sampleReviews },
    { id: uuidv4(), name: 'Science Lab', icon: 'Science Lab.png', description: 'Virtual science experiments with real-time data analysis.', reviews: sampleReviews },
    { id: uuidv4(), name: 'Language Tutor', icon: 'Language Tutor.png', description: 'Personalized language learning with real-time feedback.', reviews: sampleReviews },
    { id: uuidv4(), name: 'History Timeline', icon: 'History Timeline.png', description: 'Interactive timelines for learning historical events.', reviews: sampleReviews },
    { id: uuidv4(), name: 'Music Tutor', icon: 'Music Tutor.png', description: 'Learn music theory and practice instruments virtually.', reviews: sampleReviews },
    { id: uuidv4(), name: 'Art Studio', icon: 'Art Studio.png', description: 'Digital art creation with various tools and templates.', reviews: sampleReviews },
    { id: uuidv4(), name: 'Fitness Coach', icon: 'Fitness Coach.png', description: 'Personalized workout plans and real-time posture correction.', reviews: sampleReviews },
    { id: uuidv4(), name: 'Mental Health', icon: 'Mental Health.png', description: 'Mindfulness and stress-relief exercises for mental well-being.', reviews: sampleReviews }
  ];

  for (const product of sampleProducts) {
    const newProduct = new ProductModel(product);
    await newProduct.save();
  }

  console.log('Sample products added to MongoDB');
}
};

// API routes
app.get('/api/products', async (req, res, next) => {
try {
  const allProducts = await ProductModel.find({});
  res.json(allProducts);
} catch (err) {
  console.error('Error retrieving products:', err);
  next(err);
}
});

app.get('/api/products/:productId', async (req, res, next) => {
try {
  const { productId } = req.params;
  const foundProduct = await ProductModel.findOne({ id: productId });
  if (foundProduct) {
    res.json(foundProduct);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
} catch (err) {
  console.error('Error:', err);
  next(err);
}
});

// Asynchronous Error Handling Middleware
app.use(async (err, req, res, next) => {
console.error(err.stack);
res.status(500).send('Something broke!');
});

// Start Server
app.listen(port, () => {
console.log(`Server running at http://localhost:${port}/`);
});