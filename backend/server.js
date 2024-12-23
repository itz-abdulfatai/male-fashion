require('dotenv').config();
const express = require('express');
const { mockProducts } = require('./constants');
const morgan = require('morgan');

const app = express()
app.use(express.json())


app.use(morgan('dev'))


app.get('/',(req, res) => {
    res.send('working')
    
    
})



/**
 * Handles GET requests for product data with filtering, sorting, and pagination.
 * 
 * @param {Object} req - Express request object.
 * @param {Object} req.query - Query parameters from the request URL.
 * @param {string} [req.query.search] - Search term to filter products by name, tags, or brand.
 * @param {number} [req.query.page=1] - Page number for pagination.
 * @param {string} [req.query.sort] - Sorting option ('asc' for ascending, 'desc' for descending by price).
 * @param {Object} res - Express response object.
 * @returns {void} Sends a JSON response with filtered products and total count, or a 404 status if no products found.
 */
app.get('/products', (req, res) => {
  res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.set('Pragma', 'no-cache');
  res.set('Expires', '0');
  res.set('Surrogate-Control', 'no-store');
  let { search, page, sort } = req.query;
  let filteredProducts = mockProducts;

  if (sort && sort != 'none') {
    switch (sort) {
      case 'asc':
        filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
        console.log('provided in ascending order')
        break;
        case 'desc':
          filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
        console.log('provided in descending order')

        break;


      default:
        break;
    }
  }

  if (search) {
    const searchLower = search.toLowerCase();

    const matchName = mockProducts.filter(product => 
      product.name.toLowerCase().includes(searchLower)
    );

    const matchTags = mockProducts.filter(product =>
      product?.tags && product?.tags?.some(tag => tag.toLowerCase().includes(searchLower)) &&
      !matchName.includes(product) 
    );

    const matchBrand = mockProducts.filter(product => 
      product.brand?.toLowerCase().includes(searchLower) &&
      !matchName.includes(product) &&
      !matchTags.includes(product)
    );

    filteredProducts = [...matchName, ...matchTags, ...matchBrand];
  }

  if (filteredProducts.length == 0) return res.sendStatus(404)

    if (page < 1 || !page || isNaN(parseInt(page, 10))) page = 1


    const startIndex = (page - 1) * 9;
    const endIndex = startIndex + 9;
    const pageArr = filteredProducts.slice(startIndex, endIndex)
      res.send({products:pageArr, totalCount: filteredProducts.length});



});
















const port = process.env.PORT || 4000

app.listen(port , () => {
    console.log(`Server is running on port ${port}`)
})