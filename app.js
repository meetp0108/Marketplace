const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productController = require('./controllers/productController');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/Marketplace', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Routes

app.get('/', (req, res) => {
    res.json({ message: "Welcome to DressStore application." });
  });

  
  
// Add your routes here
// Define routes
app.get('/api/products', productController.getAllProducts);  //to get all products
app.get('/api/products/:id', productController.getProductById);  //to get a product by ID
app.post('/api/products', productController.addNewProduct);  //to add a new product
app.put('/api/products/:id', productController.updateProductById);  //to update a product by ID
app.delete('/api/products/:id', productController.removeProductById);  //to remove a product by ID
app.delete('/api/products', productController.removeAllProducts);  //to remove all products

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});