// Import required modules
// Express for the web server, CORS for cross-origin requests, and UUID for generating unique IDs.
const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

// Create an Express application
// Initialize the Express app and set the port number.
const app = express();
const port = 3001;

// Middleware for enabling Cross-Origin Resource Sharing (CORS)
// Enable CORS and JSON parsing for incoming requests.
app.use(cors());
app.use(express.json());

// Sample product data
// This is the mock database containing product and review information.

const products = [
  {
    id: '1',
    name: 'AI Math Solver',
    icon: 'https://via.placeholder.com/50',
    reviews: [
      { id: '1', rating: 4, comment: 'Great for solving equations!' },
      { id: '2', rating: 5, comment: 'Helped me understand calculus better.' }
    ],
  },
  {
    id: '2',
    name: 'AI Science Lab',
    icon: 'https://via.placeholder.com/50',
    reviews: [
      { id: '3', rating: 3, comment: 'Good for basic science topics.' },
      { id: '4', rating: 4, comment: 'Loved the interactive experiments.' }
    ],
  },
  {
    id: '3',
    name: 'History Explorer',
    icon: 'https://via.placeholder.com/50',
    reviews: [
      { id: '5', rating: 5, comment: 'Made history come alive!' },
      { id: '6', rating: 4, comment: 'Great timelines and maps.' }
    ],
  },
  {
    id: '4',
    name: 'AI Language Tutor',
    icon: 'https://via.placeholder.com/50',
    reviews: [
      { id: '7', rating: 5, comment: 'Improved my vocabulary!' },
      { id: '8', rating: 4, comment: 'Helpful for learning new languages.' }
    ],
  },
  {
    id: '5',
    name: 'Code Helper',
    icon: 'https://via.placeholder.com/50',
    reviews: [
      { id: '9', rating: 4, comment: 'Debugging made easy.' },
      { id: '10', rating: 5, comment: 'Great for learning algorithms.' }
    ],
  },
  {
    id: '6',
    name: 'AI Music Teacher',
    icon: 'https://via.placeholder.com/50',
    reviews: [
      { id: '11', rating: 5, comment: 'Learned to play the guitar!' },
      { id: '12', rating: 4, comment: 'Helpful for understanding music theory.' }
    ],
  },
  {
    id: '7',
    name: 'Fitness Coach',
    icon: 'https://via.placeholder.com/50',
    reviews: [
      { id: '13', rating: 4, comment: 'Keeps me active.' },
      { id: '14', rating: 5, comment: 'Love the personalized workout plans.' }
    ],
  },
  {
    id: '8',
    name: 'AI Art Instructor',
    icon: 'https://via.placeholder.com/50',
    reviews: [
      { id: '15', rating: 5, comment: 'Improved my drawing skills.' },
      { id: '16', rating: 4, comment: 'Great for learning digital art.' }
    ],
  },
  {
    id: '9',
    name: 'Mental Health Buddy',
    icon: 'https://via.placeholder.com/50',
    reviews: [
      { id: '17', rating: 5, comment: 'Helps me relax.' },
      { id: '18', rating: 4, comment: 'Good for stress management.' }
    ],
  },
  {
    id: '10',
    name: 'AI Debate Coach',
    icon: 'https://via.placeholder.com/50',
    reviews: [
      { id: '19', rating: 5, comment: 'Enhanced my public speaking.' },
      { id: '20', rating: 4, comment: 'Helpful for forming arguments.' }
    ],
  }
];



// Define API routes and their functionality

  // Fetch all products
  // GET endpoint to fetch all products from the mock database.

  app.get('/api/products', (req, res) => {
    res.json(products);
  });

  // Fetch individual product by ID
    // GET endpoint to fetch a specific product by its ID.

  app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p.id === req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  });

  // Add a new product
  // POST endpoint to add a new product to the mock database.

  app.post('/api/products', (req, res) => {
    const newProduct = {
      id: uuidv4(),
      name: req.body.name,
      icon: req.body.icon,
      reviews: []
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
  });

  // Update a product by ID
  // PUT endpoint to update an existing product by its ID.

  app.put('/api/products/:id', (req, res) => {
    const product = products.find(p => p.id === req.params.id);
    if (product) {
      product.name = req.body.name || product.name;
      product.icon = req.body.icon || product.icon;
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  });

  // Delete a product by ID
  // DELETE endpoint to remove a product by its ID.

  app.delete('/api/products/:id', (req, res) => {
    const index = products.findIndex(p => p.id === req.params.id);
    if (index !== -1) {
      products.splice(index, 1);
      res.status(204).end();
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  });

  // Add a review to a product
  // POST endpoint to add a review to a specific product.

  app.post('/api/products/:id/reviews', (req, res) => {
    const product = products.find(p => p.id === req.params.id);
    if (product) {
      const newReview = {
        id: uuidv4(),
        rating: req.body.rating,
        comment: req.body.comment
      };
      product.reviews.push(newReview);
      res.status(201).json(newReview);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  });

  // Fetch all reviews
  // GET endpoint to fetch all reviews across all products.

  app.get('/api/reviews', (req, res) => {
    // Flatten product reviews and add product names
    const allReviews = products.flatMap(product => product.reviews.map(review => ({...review, product: product.name})));
    res.json(allReviews);
  });

  // Basic error handling middleware
  // Middleware to handle errors and send a 500 status code.

  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

  // Start the Express server
  // Start the server and log the URL where it can be accessed.

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });