const Product = require('../models/Product');  // Import Product model
const Category = require('../models/Category');  // Import Category model

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      include: Category,  // Include the category associated with each product
    });

    if (!products || products.length === 0) {
      return res.status(404).json({ message: 'No products found' });
    }

    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get products by category
exports.getProductByCategory = async (req, res) => {
  try {
    const { categoryId } = req.params;

    // Find products by categoryId
    const products = await Product.findAll({
      where: { categoryId },
      include: Category,  // Include the category associated with each product
    });

    if (!products || products.length === 0) {
      return res.status(404).json({ message: 'No products found in this category' });
    }

    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get a product by ID
exports.getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    // Find product by id
    const product = await Product.findOne({
      where: { id },
      include: Category,  // Include the category associated with the product
    });

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({ product });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
