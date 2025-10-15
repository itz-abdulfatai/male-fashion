require('dotenv').config();
const express = require('express');
const cors = require("cors");
const { mockProducts } = require("./constants");
const morgan = require("morgan");

const allowedOrigins = [
  "http://localhost:5173",
  "https://male-fashion-sigma.vercel.app",
];

const app = express();
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);
app.use(express.json())

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ error: "Something went wrong!" });
});


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
  let { search, page, sort, category, brand , tag } = req.query;
  let filteredProducts = mockProducts;

  if (sort && sort != 'none') {
    switch (sort) {
      case 'asc':
        filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
        // console.log('provided in ascending order')
        break;
        case 'desc':
          filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
        // console.log('provided in descending order')

        break;

      default:
        break;
    }
  }
  

  if (search) {
    const searchLower = search.toLowerCase().replace(/'/g, '');

    const matchName = mockProducts.filter(product => 
      product.name.toLowerCase().replace(/'/g, '').includes(searchLower)
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

  if (tag) {
    const tagLower = tag.toLowerCase();
    filteredProducts = filteredProducts.filter(product =>
      product?.tags && product.tags.some(t => t.toLowerCase().includes(tagLower))
    );
  }
  
  if (category) {
    const categoryLower = category.toLowerCase();
    filteredProducts = filteredProducts.filter(product =>
      product.category.toLowerCase().includes(categoryLower) ||
      product.subcategory?.toLowerCase().includes(categoryLower) ||
      product.brand?.toLowerCase().includes(categoryLower)
    );
  }

  if (brand) {
    const brandLower = brand.toLowerCase();
    filteredProducts = filteredProducts.filter(product =>
      product?.brand?.toLowerCase().includes(brandLower)
    );
  }
  

  if (filteredProducts.length == 0) return res.sendStatus(404)

    if (page < 1 || !page || isNaN(parseInt(page, 10))) page = 1


    const startIndex = (page - 1) * 9;
    const endIndex = startIndex + 9;
    const pageArr = filteredProducts.slice(startIndex, endIndex)
      res.send({products:pageArr, totalCount: filteredProducts.length});

});



const port = process.env.PORT || 3124

app.listen(port , () => {
    console.log(`Server is running on port ${port}`)
})

// {
//   _id: "product50",
//   name: "Men's Grey Wool Coat",
//   category: "Coats",
//   price: 8999,
//   brand: 'dior',

//   stock: 20,
//   sizes: ["M", "L", "XL"],
//   color: "Grey",
//   images: [{ URL: null, deletehash: null }],
//   views: 50,
//   createdBy: "admin1",
//   tags: ["winter", "fashion"],
//   timestamps: { createdAt: new Date(), updatedAt: new Date() },
//   review: {
//     count: 40,
//     rating: 4.3
//   }
// },