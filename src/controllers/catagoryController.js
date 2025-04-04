const Category = require('../models/Category'); 

exports.getAllCatagory = async (req, res) => {
    try {
      const catagory = await Category.findAll({
       
      });
  
      if (!catagory || catagory.length === 0) {
        return res.status(404).json({ message: 'No products found' });
      }
  
      res.status(200).json({ catagory });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  };