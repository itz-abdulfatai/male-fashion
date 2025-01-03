export const mockUser = [
    {
      role: "ceo",
      _id: "ceo123",
      email: { email: "ceo@example.com", verified: true },
      name: "CEO User",
      phoneNumber: "+1234567890",
      avatar: null,
      cartItems: [],
      wishlistItems: [],
      orderHistory: [],
      authToken: "ceo-auth-token-123",
      theme: "dark",
      language: "en",
      tickets: [],
      address: { street: "CEO St", city: "Capital", zip: "12345", country: "USA" },
      paymentMethods: ["Visa", "MasterCard"],
      loyaltyPoints: 500,
      currency: "USD",
    },
    {
      role: "admin",
      _id: "admin1",
      email: { email: "admin1@example.com", verified: true },
      name: "Admin One",
      phoneNumber: "+1234567891",
      avatar: null,
      cartItems: [],
      wishlistItems: [],
      orderHistory: [],
      authToken: "admin1-auth-token-123",
      theme: "light",
      language: "en",
      tickets: [],
      address: { street: "Admin Blvd", city: "Metro", zip: "54321", country: "USA" },
      paymentMethods: ["PayPal"],
      loyaltyPoints: 300,
      currency: "USD",
    },
    {
      role: "admin",
      _id: "admin2",
      email: { email: "admin2@example.com", verified: false },
      name: "Admin Two",
      phoneNumber: "+1234567892",
      avatar: null,
      cartItems: [],
      wishlistItems: [],
      orderHistory: [],
      authToken: "admin2-auth-token-123",
      theme: "dark",
      language: "en",
      tickets: [],
      address: { street: "Admin St", city: "Commerce City", zip: "67890", country: "USA" },
      paymentMethods: ["Stripe"],
      loyaltyPoints: 200,
      currency: "USD",
    },
    {
      role: "client",
      _id: "user1",
      email: { email: "user1@example.com", verified: true },
      name: "User One",
      phoneNumber: "+1234567893",
      avatar: null,
      cartItems: [{ productId: "prod123", quantity: 2 }],
      wishlistItems: ["prod456"],
      orderHistory: [{ productId: "prod789", status: "completed" }],
      authToken: "user1-auth-token-123",
      theme: "light",
      language: "en",
      tickets: [],
      address: { street: "User St", city: "Townsville", zip: "12321", country: "USA" },
      paymentMethods: ["Visa"],
      loyaltyPoints: 100,
      currency: "USD",
    },
    {
      role: "client",
      _id: "user2",
      email: { email: "user2@example.com", verified: true },
      name: "User Two",
      phoneNumber: "+1234567894",
      avatar: null,
      cartItems: [{ productId: "prod987", quantity: 1 }],
      wishlistItems: ["prod654"],
      orderHistory: [{ productId: "prod321", status: "pending" }],
      authToken: null,
      theme: "dark",
      language: "en",
      tickets: [],
      address: { street: "User Rd", city: "Smalltown", zip: "45678", country: "USA" },
      paymentMethods: ["MasterCard"],
      loyaltyPoints: 50,
      currency: "USD",
    },
  ];
  
// skipped for context
// loading
// loggedin
// error


export const mockProducts = [
  {
    _id: "product1",
    name: "Men's Slim Fit Jeans",
    category: "Jeans",
    subcategory: "Slim Fit",
    brand: "Levi's",
    price: 2999,
    discountPrice: 2499,
    stock: 50,
    sizes: ["S", "M", "L", "XL"],
    color: "Blue",
    images: [{ URL: null, deletehash: null }, { URL: null, deletehash: null }],
    views: 150,
    createdBy: "admin1",
    tags: ["casual", "fashion", "denim"],
    timestamps: { createdAt: new Date(), updatedAt: new Date() },
    review: {
      count: 87,
      rating: 4.3
    }
  },
  {
    _id: "product2",
    name: "Men's Black Hoodie",
    category: "Hoodies",
    subcategory: "Casual",
    brand: "Nike",
    price: 3999,
    discountPrice: 3499,
    stock: 100,
    sizes: ["M", "L", "XL"],
    color: "Black",
    images: [{ URL: null, deletehash: null }],
    views: 250,
    createdBy: "ceo",
    tags: ["sportswear", "comfort"],
    timestamps: { createdAt: new Date(), updatedAt: new Date() },
    review: {
      count: 92,
      rating: 4.1
    }
  },
  {
    _id: "product3",
    name: "Men's White Dress Shirt",
    category: "Shirts",
    price: 2499,
    stock: 30,
    sizes: ["S", "M", "L", "XL"],
    color: "White",
    images: [{ URL: null, deletehash: null }],
    views: 75,
    createdBy: "admin2",
    tags: ["formal", "officewear"],
    timestamps: { createdAt: new Date(), updatedAt: new Date() },
    review: {
      count: 60,
      rating: 4.0
    }
  },
  {
    _id: "product4",
    name: "Men's Red T-shirt",
    category: "T-shirts",
    price: 999,
    stock: 0,
    sizes: ["M", "L", "XL"],
    color: "Red",
    images: [{ URL: null, deletehash: null }],
    views: 120,
    createdBy: "ceo",
    tags: [],
    timestamps: { createdAt: new Date(), updatedAt: new Date() },
    review: {
      count: 45,
      rating: 3.8
    }
  },
  {
    _id: "product5",
    name: "Men's Sports Shorts",
    category: "Shorts",
    price: 1599,
    stock: 10,
    sizes: ["M", "L"],
    color: "Gray",
    images: [{ URL: null, deletehash: null }, { URL: null, deletehash: null }],
    views: 90,
    createdBy: "admin1",
    tags: ["sportswear", "comfort"],
    timestamps: { createdAt: new Date(), updatedAt: new Date() },
    review: {
      count: 78,
      rating: 4.4
    }
  },
  {
    _id: "product6",
    name: "Men's Leather Belt",
    category: "Accessories",
    price: 1999,
    stock: 25,
    images: [{ URL: null, deletehash: null }],
    views: 65,
    createdBy: "admin2",
    tags: ["leather", "fashion"],
    timestamps: { createdAt: new Date(), updatedAt: new Date() },
    review: {
      count: 33,
      rating: 4.6
    }
  },
  {
    _id: "product7",
    name: "Men's Casual Sneakers",
    category: "Footwear",
    price: 4999,
    stock: 15,
    sizes: ["7", "8", "9", "10"],
    color: "White",
    images: [{ URL: null, deletehash: null }],
    views: 220,
    createdBy: "ceo",
    tags: ["casual", "comfort", "fashion"],
    timestamps: { createdAt: new Date(), updatedAt: new Date() },
    review: {
      count: 95,
      rating: 4.7
    }
  },
  {
    _id: "product8",
    name: "Men's Wool Coat",
    category: "Coats",
    price: 7999,
    stock: 20,
    sizes: ["M", "L", "XL"],
    color: "Charcoal",
    images: [{ URL: null, deletehash: null }],
    views: 30,
    createdBy: "admin1",
    tags: ["winter", "fashion"],
    timestamps: { createdAt: new Date(), updatedAt: new Date() },
    review: {
      count: 50,
      rating: 4.2
    }
  },
  {
    _id: "product9",
    name: "Men's Navy Blue Blazer",
    category: "Jackets",
    price: 5999,
    stock: 12,
    sizes: ["M", "L"],
    color: "Navy Blue",
    images: [{ URL: null, deletehash: null }],
    views: 100,
    createdBy: "admin2",
    tags: ["formal", "officewear"],
    timestamps: { createdAt: new Date(), updatedAt: new Date() },
    review: {
      count: 65,
      rating: 4.5
    }
  },
  {
    _id: "product10",
    name: "Men's Grey Sweatpants",
    category: "Pants",
    price: 2299,
    stock: 5,
    sizes: ["S", "M", "L"],
    color: "Grey",
    images: [{ URL: null, deletehash: null }],
    views: 50,
    createdBy: "ceo",
    tags: ["casual", "comfort"],
    timestamps: { createdAt: new Date(), updatedAt: new Date() },
    review: {
      count: 40,
      rating: 3.9
    }
  },
  {
    _id: "product11",
    name: "Men's Running Shoes",
    category: "Footwear",
    price: 6999,
    stock: 30,
    sizes: ["8", "9", "10", "11"],
    color: "Black",
    images: [{ URL: null, deletehash: null }],
    views: 180,
    createdBy: "admin1",
    tags: ["sportswear", "running"],
    timestamps: { createdAt: new Date(), updatedAt: new Date() },
    review: {
      count: 88,
      rating: 4.6
    }
  },
  {
    _id: "product12",
    name: "Men's Leather Wallet",
    category: "Accessories",
    price: 2499,
    stock: 40,
    images: [{ URL: null, deletehash: null }],
    views: 90,
    createdBy: "admin2",
    tags: ["leather", "fashion"],
    timestamps: { createdAt: new Date(), updatedAt: new Date() },
    review: {
      count: 55,
      rating: 4.3
    }
  },
  {
    _id: "product13",
    name: "Men's Blue Polo Shirt",
    category: "Shirts",
    price: 1999,
    stock: 60,
    sizes: ["S", "M", "L", "XL"],
    color: "Blue",
    images: [{ URL: null, deletehash: null }],
    views: 110,
    createdBy: "ceo",
    tags: ["casual", "fashion"],
    timestamps: { createdAt: new Date(), updatedAt: new Date() },
    review: {
      count: 70,
      rating: 4.0
    }
  },
  {
    _id: "product14",
    name: "Men's Black Dress Shoes",
    category: "Footwear",
    price: 8999,
    stock: 20,
    sizes: ["9", "10", "11"],
    color: "Black",
    images: [{ URL: null, deletehash: null }],
    views: 130,
    createdBy: "admin1",
    tags: ["formal", "officewear"],
    timestamps: { createdAt: new Date(), updatedAt: new Date() },
    review: {
      count: 77,
      rating: 4.8
    }
  },
  {
    _id: "product15",
    name: "Men's Green Cargo Pants",
    category: "Pants",
    price: 3499,
    stock: 25,
    sizes: ["M", "L", "XL"],
    color: "Green",
    images: [{ URL: null, deletehash: null }],
    views: 70,
    createdBy: "admin2",
    tags: ["casual", "outdoor"],
    timestamps: { createdAt: new Date(), updatedAt: new Date() },
    review: {
      count: 48,
      rating: 4.1
    }
  },
  {
    _id: "product16",
    name: "Men's Wool Scarf",
    category: "Accessories",
    price: 1299,
    stock: 50,
    images: [{ URL: null, deletehash: null }],
    views: 40,
    createdBy: "ceo",
    tags: ["winter", "fashion"],
    timestamps: { createdAt: new Date(), updatedAt: new Date() },
    review: {
      count: 30,
      rating: 4.4
    }
  },
  {
    _id: "product17",
    name: "Men's Black Leather Jacket",
    category: "Jackets",
    price: 9999,
    stock: 15,
    sizes: ["M", "L", "XL"],
    color: "Black",
    images: [{ URL: null, deletehash: null }],
    views: 200,
    createdBy: "admin1",
    tags: ["leather", "fashion"],
    timestamps: { createdAt: new Date(), updatedAt: new Date() },
    review: {
      count: 95,
      rating: 4.9
    }
  },
  {
    _id: "product18",
    name: "Men's White Sneakers",
    category: "Footwear",
    price: 5499,
    stock: 35,
    sizes: ["8", "9", "10"],
    color: "White",
    images: [{ URL: null, deletehash: null }],
    views: 160,
    createdBy: "admin2",
    tags: ["casual", "comfort"],
    timestamps: { createdAt: new Date(), updatedAt: new Date() },
    review: {
      count: 85,
      rating: 4.2
    }
  },
  {
    _id: "product19",
    name: "Men's Black Beanie",
    category: "Accessories",
    price: 799,
    stock: 70,
    images: [{ URL: null, deletehash: null }],
    views: 30,
    createdBy: "ceo",
    tags: ["winter", "fashion"],
    timestamps: { createdAt: new Date(), updatedAt: new Date() },
    review: {
      count: 40,
      rating: 3.7
    }
  },
  {
    _id: "product20",
    name: "Men's Grey Hoodie",
    category: "Hoodies",
    price: 3499,
    stock: 40,
    sizes: ["M", "L", "XL"],
    color: "Grey",
    images: [{ URL: null, deletehash: null }],
    views: 140,
    createdBy: "admin1",
    tags: ["casual", "comfort"],
    timestamps: { createdAt: new Date(), updatedAt: new Date() },
    review: {
      count: 60,
      rating: 4.0
    }
  },
  {
    _id: "product21",
    name: "Men's Blue Denim Jacket",
    category: "Jackets",
    price: 7499,
    stock: 10,
    sizes: ["M", "L"],
    color: "Blue",
    images: [{ URL: null, deletehash: null }],
    views: 90,
    createdBy: "admin2",
    tags: ["denim", "fashion"],
    timestamps: { createdAt: new Date(), updatedAt: new Date() },
    review: {
      count: 55,
      rating: 4.3
    }
  },
  {
    _id: "product22",
    name: "Men's Black Leather Gloves",
    category: "Accessories",
    price: 1999,
    stock: 30,
    images: [{ URL: null, deletehash: null }],
    views: 50,
    createdBy: "ceo",
    tags: ["leather", "winter"],
    timestamps: { createdAt: new Date(), updatedAt: new Date() },
    review: {
      count: 35,
      rating: 4.5
    }
  },
  {
    _id: "product23",
    name: "Men's Red Polo Shirt",
    category: "Shirts",
    price: 2199,
    stock: 45,
    sizes: ["S", "M", "L", "XL"],
    color: "Red",
    images: [{ URL: null, deletehash: null }],
    views: 100,
    createdBy: "admin1",
    tags: ["casual", "fashion"],
    timestamps: { createdAt: new Date(), updatedAt: new Date() },
    review: {
      count: 70,
      rating: 4.1
    }
  },
  {
    _id: "product24",
    name: "Men's Black Formal Pants",
    category: "Pants",
    price: 3999,
    stock: 20,
    sizes: ["M", "L", "XL"],
    color: "Black",
    images: [{ URL: null, deletehash: null }],
    views: 80,
    createdBy: "admin2",
    tags: ["formal", "officewear"],
    timestamps: { createdAt: new Date(), updatedAt: new Date() },
    review: {
      count: 50,
      rating: 4.4
    }
  },
  {
    _id: "product25",
    name: "Men's White T-shirt",
    category: "T-shirts",
    price: 1299,
    stock: 60,
    sizes: ["S", "M", "L", "XL"],
    color: "White",
    images: [{ URL: null, deletehash: null }],
    views: 150,
    createdBy: "ceo",
    tags: ["casual", "comfort"],
    timestamps: { createdAt: new Date(), updatedAt: new Date() },
    review: {
      count: 90,
      rating: 4.0
    }
  },
  {
    _id: "product26",
    name: "Men's Brown Leather Boots",
    category: "Footwear",
    price: 10999,
    stock: 15,
    sizes: ["9", "10", "11"],
    color: "Brown",
    images: [{ URL: null, deletehash: null }],
    views: 170,
    createdBy: "admin1",
    tags: ["leather", "fashion"],
    timestamps: { createdAt: new Date(), updatedAt: new Date() },
    review: {
      count: 85,
      rating: 4.7
    }
  },
  {
    _id: "product27",
    name: "Men's Grey Wool Hat",
    category: "Accessories",
    price: 999,
    stock: 50,
    images: [{ URL: null, deletehash: null }],
    views: 40,
    createdBy: "admin2",
    tags: ["winter", "fashion"],
    timestamps: { createdAt: new Date(), updatedAt: new Date() },
    review: {
      count: 25,
      rating: 3.9
    }
  },
  {
    _id: "product28",
    name: "Men's Blue Swim Shorts",
    category: "Shorts",
    price: 1999,
    stock: 35,
    sizes: ["M", "L", "XL"],
    color: "Blue",
    images: [{ URL: null, deletehash: null }],
    views: 60,
    createdBy: "ceo",
    tags: ["swimwear", "summer"],
    timestamps: { createdAt: new Date(), updatedAt: new Date() },
    review: {
      count: 45,
      rating: 4.2
    }
  },
  {
    _id: "product29",
    name: "Men's Black Running Shorts",
    category: "Shorts",
    price: 1799,
    stock: 40,
    sizes: ["M", "L", "XL"],
    color: "Black",
    images: [{ URL: null, deletehash: null }],
    views: 90,
    createdBy: "admin1",
    tags: ["sportswear", "running"],
    timestamps: { createdAt: new Date(), updatedAt: new Date() },
    review: {
      count: 55,
      rating: 4.1
    }
  },
  {
    _id: "product30",
    name: "Men's White Cotton Socks",
    category: "Accessories",
    price: 499,
    stock: 100,
    images: [{ URL: null, deletehash: null }],
    views: 20,
    createdBy: "admin2",
    tags: ["casual", "comfort"],
    timestamps: { createdAt: new Date(), updatedAt: new Date() },
    review: {
      count: 15,
      rating: 3.6
    }
  },
  {
    _id: "product31",
    name: "Men's Black Formal Shoes",
    category: "Footwear",
    price: 7999,
    stock: 25,
    sizes: ["9", "10", "11"],
    color: "Black",
    images: [{ URL: null, deletehash: null }],
    views: 140,
    createdBy: "ceo",
    tags: ["formal", "officewear"],
    timestamps: { createdAt: new Date(), updatedAt: new Date() },
    review: {
      count: 75,
      rating: 4.8
    }
  },
  {
    _id: "product32",
    name: "Men's Blue Casual Shirt",
    category: "Shirts",
    price: 2499,
    stock: 50,
    sizes: ["S", "M", "L", "XL"],
    color: "Blue",
    images: [{ URL: null, deletehash: null }],
    views: 130,
    createdBy: "admin1",
    tags: ["casual", "fashion"],
    timestamps: { createdAt: new Date(), updatedAt: new Date() },
    review: {
      count: 65,
      rating: 4.0
    }
  },
  {
    _id: "product33",
    name: "Men's Black Leather Belt",
    category: "Accessories",
    price: 1499,
    stock: 40,
    images: [{ URL: null, deletehash: null }],
    views: 60,
    createdBy: "admin2",
    tags: ["leather", "fashion"],
    timestamps: { createdAt: new Date(), updatedAt: new Date() },
    review: {
      count: 35,
      rating: 4.5
    }
  },
  {
    _id: "product34",
    name: "Men's Grey Sweatshirt",
    category: "Hoodies",
    price: 2999,
    stock: 30,
    sizes: ["M", "L", "XL"],
    color: "Grey",
    images: [{ URL: null, deletehash: null }],
    views: 100,
    createdBy: "ceo",
    tags: ["casual", "comfort"],
    timestamps: { createdAt: new Date(), updatedAt: new Date() },
    review: {
      count: 50,
      rating: 4.1
    }
  },
  {
    _id: "product35",
    name: "Men's Blue Denim Jeans",
    category: "Jeans",
    price: 3499,
    stock: 20,
    sizes: ["S", "M", "L", "XL"],
    color: "Blue",
    images: [{ URL: null, deletehash: null }],
    views: 110,
    createdBy: "admin1",
    tags: ["denim", "fashion"],
    timestamps: { createdAt: new Date(), updatedAt: new Date() },
    review: {
      count: 60,
      rating: 4.3
    }
  },
  {
    _id: "product36",
    name: "Men's Black Wool Coat",
    category: "Coats",
    price: 8999,
    stock: 15,
    sizes: ["M", "L", "XL"],
    color: "Black",
    images: [{ URL: null, deletehash: null }],
    views: 50,
    createdBy: "admin2",
    tags: ["winter", "fashion"],
    timestamps: { createdAt: new Date(), updatedAt: new Date() },
    review: {
      count: 40,
      rating: 4.4
    }
  },
  {
    _id: "product37",
    name: "Men's White Dress Shirt",
    category: "Shirts",
    price: 2999,
    stock: 25,
    sizes: ["S", "M", "L", "XL"],
    color: "White",
    images: [{ URL: null, deletehash: null }],
    views: 70,
    createdBy: "ceo",
    tags: ["formal", "officewear"],
    timestamps: { createdAt: new Date(), updatedAt: new Date() },
    review: {
      count: 55,
      rating: 5
    }
  },
  {
    _id: "product38",
    name: "Men's Black Leather Wallet",
    category: "Accessories",
    price: 1999,
    stock: 35,
    images: [{ URL: null, deletehash: null }],
    views: 40,
    createdBy: "admin1",
    tags: ["leather", "fashion"],
    timestamps: { createdAt: new Date(), updatedAt: new Date() },
    review: {
      count: 30,
      rating: 4.6
    }
  },
  {
    _id: "product39",
    name: "Men's Grey Joggers",
    category: "Pants",
    price: 2799,
    stock: 30,
    sizes: ["M", "L", "XL"],
    color: "Grey",
    images: [{ URL: null, deletehash: null }],
    views: 90,
    createdBy: "admin2",
    tags: ["casual", "comfort"],
    timestamps: { createdAt: new Date(), updatedAt: new Date() },
    review: {
      count: 45,
      rating: 4.2
    }
  },
  {
    _id: "product40",
    name: "Men's Blue Casual Sneakers",
    category: "Footwear",
    price: 5999,
    stock: 20,
    sizes: ["8", "9", "10"],
    color: "Blue",
    images: [{ URL: null, deletehash: null }],
    views: 150,
    createdBy: "ceo",
    tags: ["casual", "fashion"],
    timestamps: { createdAt: new Date(), updatedAt: new Date() },
    review: {
      count: 70,
      rating: 4.5
    }
  },
  {
    _id: "product41",
    name: "Men's Black Wool Scarf",
    category: "Accessories",
    price: 1299,
    stock: 45,
    images: [{ URL: null, deletehash: null }],
    views: 30,
    createdBy: "admin1",
    tags: ["winter", "fashion"],
    timestamps: { createdAt: new Date(), updatedAt: new Date() },
    review: {
      count: 25,
      rating: 3.8
    }
  },
  {
    _id: "product42",
    name: "Men's Red Running Shoes",
    category: "Footwear",
    price: 6999,
    stock: 25,
    sizes: ["8", "9", "10"],
    color: "Red",
    images: [{ URL: null, deletehash: null }],
    views: 120,
    createdBy: "admin2",
    tags: ["sportswear", "running"],
    timestamps: { createdAt: new Date(), updatedAt: new Date() },
    review: {
      count: 65,
      rating: 5
    }
  },
  {
    _id: "product43",
    name: "Men's Blue Swim Trunks",
    category: "Shorts",
    price: 1899,
    stock: 30,
    sizes: ["M", "L", "XL"],
    color: "Blue",
    images: [{ URL: null, deletehash: null }],
    views: 60,
    createdBy: "ceo",
    tags: ["swimwear", "summer"],
    timestamps: { createdAt: new Date(), updatedAt: new Date() },
    review: {
      count: 40,
      rating: 4.1
    }
  },
  {
    _id: "product44",
    name: "Men's Black Dress Belt",
    category: "Accessories",
    price: 1499,
    stock: 40,
    images: [{ URL: null, deletehash: null }],
    views: 50,
    createdBy: "admin1",
    tags: ["formal", "officewear"],
    timestamps: { createdAt: new Date(), updatedAt: new Date() },
    review: {
      count: 35,
      rating: 4.4
    }
  },
  {
    _id: "product45",
    name: "Men's Grey Wool Sweater",
    category: "Sweaters",
    price: 3999,
    stock: 20,
    sizes: ["M", "L", "XL"],
    color: "Grey",
    images: [{ URL: null, deletehash: null }],
    views: 80,
    createdBy: "admin2",
    tags: ["winter", "fashion"],
    timestamps: { createdAt: new Date(), updatedAt: new Date() },
    review: {
      count: 50,
      rating: 5
    }
  },
  {
    _id: "product46",
    name: "Men's White Casual Shoes",
    category: "Footwear",
    price: 5499,
    stock: 35,
    sizes: ["8", "9", "10"],
    color: "White",
    images: [{ URL: null, deletehash: null }],
    views: 140,
    createdBy: "ceo",
    tags: ["casual", "comfort"],
    timestamps: { createdAt: new Date(), updatedAt: new Date() },
    review: {
      count: 80,
      rating: 4.6
    }
  },
  {
    _id: "product47",
    name: "Men's Black Wool Hat",
    category: "Accessories",
    price: 999,
    stock: 50,
    images: [{ URL: null, deletehash: null }],
    views: 30,
    createdBy: "admin1",
    tags: ["winter", "fashion"],
    timestamps: { createdAt: new Date(), updatedAt: new Date() },
    review: {
      count: 20,
      rating: 3.9
    }
  },
  {
    _id: "product48",
    name: "Men's Blue Denim Shorts",
    category: "Shorts",
    price: 2299,
    stock: 25,
    sizes: ["M", "L", "XL"],
    color: "Blue",
    images: [{ URL: null, deletehash: null }],
    views: 70,
    createdBy: "admin2",
    tags: ["denim", "fashion"],
    timestamps: { createdAt: new Date(), updatedAt: new Date() },
    review: {
      count: 45,
      rating: 4.0
    }
  },
  {
    _id: "product49",
    name: "Men's Black Leather Jacket",
    category: "Jackets",
    price: 9999,
    stock: 15,
    sizes: ["M", "L", "XL"],
    color: "Black",
    images: [{ URL: null, deletehash: null }],
    views: 200,
    createdBy: "ceo",
    tags: ["leather", "fashion"],
    timestamps: { createdAt: new Date(), updatedAt: new Date() },
    review: {
      count: 90,
      rating: 4.9
    }
  },
  {
    _id: "product50",
    name: "Men's Grey Wool Coat",
    category: "Coats",
    price: 8999,
    stock: 20,
    sizes: ["M", "L", "XL"],
    color: "Grey",
    images: [{ URL: null, deletehash: null }],
    views: 50,
    createdBy: "admin1",
    tags: ["winter", "fashion"],
    timestamps: { createdAt: new Date(), updatedAt: new Date() },
    review: {
      count: 40,
      rating: 4.3
    }
  },
];

export const categories = 
[
  { id: "category1", name: "Jeans" },
  { id: "category2", name: "Hoodies" },
  { id: "category3", name: "Shirts" },
  { id: "category4", name: "T-shirts" },
  { id: "category5", name: "Shorts" },
  { id: "category6", name: "Accessories" },
  { id: "category7", name: "Footwear" },
  { id: "category8", name: "Coats" },
  { id: "category9", name: "Jackets" },
  { id: "category10", name: "Pants" }
]
  

  export const settings = {
    siteName: 'male fashion',
    logo: '/logo.png',
    favicon: '/logo.svg',
    isUnderMaintainance: false,
    taxRate: 7.5,
    faqs: [
        {
          question: "What is the return policy?",
          answer: "You can return any item within 30 days of purchase for a full refund."
        },
        {
          question: "How long does shipping take?",
          answer: "Shipping typically takes 5-7 business days."
        },
        {
          question: "Do you offer international shipping?",
          answer: "Yes, we ship to most countries worldwide. Shipping fees and times vary by location."
        },
        {
          question: "How can I track my order?",
          answer: "Once your order has shipped, you will receive an email with a tracking number."
        }
      ],
      contactEmail: 'abdulfataialiyu4@gmail.com',
      about: [
        "Male Fashion is your one-stop destination for the latest trends in men's clothing. Our mission is to provide high-quality fashion at affordable prices, ensuring that every man can look and feel his best.",
        "We pride ourselves on our exceptional customer service and a wide range of products that cater to every style and occasion. From casual wear to formal attire, our collections are designed to meet the diverse needs of our customers.",
        "At Male Fashion, we believe in sustainability and ethical practices. We are committed to sourcing our materials responsibly and ensuring that our production processes are environmentally friendly."
      ],
      constactPhone: '+2348035255088',
      contactAddress:  { street: "CEO St", city: "Capital", zip: "12345", country: "USA" },
      socials: [
        {
            name: 'facebook', 
            href: 'https://facebook.com',
            class: 'bx bxl-facebook' 
        },
        {
            name: 'whatsapp',
            href: 'https://whatsapp.com',
            class: 'bx bxl-whatsapp' 
        },
        {
            name: 'instagram',
            href: 'https://instagram.com',
            class: 'bx bxl-instagram' 
        },
        {
            name: 'twitter',
            href: 'https://twitter.com',
            class: 'bx bxl-twitter' 
        }
      ]

  }

  export const navLinks = [
    {
        name:'Home',
        href:'/'
    },
    {
        name:'Shop',
        href:'/shop'
    },
    {
        name:'contact',
        href:'/contact'
    },
    {
      name: 'blog',
      href: '/blog'

    }
    
  ]


  export const BlogPosts = [
    {
      _id: '1',
      title: 'Top 10 Winter Accessories for Men',
      slug: 'top-10-winter-accessories-men',
      visibility: 'private',
      content: [
        'para 1: Winter is here, and staying warm doesn’t mean compromising on style. Accessories are the unsung heroes of winter fashion, helping you elevate your look while keeping you comfortable in freezing temperatures. Whether you’re heading to work or enjoying a casual weekend outing, the right accessory can make all the difference.',
        'para 2: From luxurious wool scarves to leather gloves and beanies, we’ve rounded up the top 10 accessories every man needs this winter. These items are not just practical but are also designed to complement a variety of outfits, ensuring you stay fashionable no matter the occasion.',
        'para 3: Don’t miss our handpicked selection of must-have accessories this season. Explore our guide to discover timeless pieces and trendy additions to your winter wardrobe that will keep you looking sharp and feeling cozy all winter long.'
      ],
      author: 'ceo',
      likes: 502,
      views: 12002,
      image: null,
      timestamps: {
        createdAt: '2023-10-15T10:22:45Z',
        updatedAt: '2023-12-01T15:35:20Z'
      },
      tags: ['winter', 'accessories', 'style']
    },
    {
      _id: '2',
      title: '5 Classic Men’s Coats for Every Occasion',
      slug: 'classic-mens-coats-every-occasion',
      visibility: 'public',
      content: [
        'para 1: When it comes to winter fashion, nothing beats the timeless appeal of a well-made coat. It’s the one item that ties your outfit together and ensures you look polished even when braving the elements. Investing in a classic coat is a decision that pays off year after year.',
        'para 2: From the versatile trench coat to the rugged parka, each style has its unique appeal. Learn how to pair these staples with your everyday wardrobe, whether you’re dressing up for a formal event or stepping out for a casual gathering with friends.',
        'para 3: Upgrade your wardrobe with our curated recommendations for the season. We’ve handpicked the top five coats that blend functionality and fashion, making them perfect for every occasion this winter.'
      ],
      author: 'ceo',
      likes: 879,
      views: 15500,
      image: null,
      timestamps: {
        createdAt: '2023-09-20T08:15:30Z',
        updatedAt: '2023-11-25T12:48:10Z'
      },
      tags: ['coats', 'classic', 'winter']
    },
    {
      _id: '3',
      title: 'Why Layering is the Secret to Winter Style',
      slug: 'layering-secret-winter-style',
      visibility: 'public',
      content: [
        'para 1: Winter doesn’t have to mean bulky and unflattering outfits. The secret to staying warm while looking stylish lies in mastering the art of layering. By strategically combining different textures, fabrics, and colors, you can create outfits that are both functional and fashionable.',
        'para 2: Layering starts with a good base. Opt for thermal or moisture-wicking materials for the first layer, followed by a middle layer that traps heat, like a wool sweater or fleece. Top it off with an outer layer that provides protection against the elements, such as a parka or a trench coat.',
        'para 3: Embrace layering this winter and redefine your wardrobe. Our guide will show you how to mix and match pieces to create cohesive looks that keep you warm without sacrificing style.'
      ],
      author: 'ceo',
      likes: 1230,
      views: 17500,
      image: null,
      timestamps: {
        createdAt: '2023-08-15T14:10:05Z',
        updatedAt: '2023-11-05T09:22:18Z'
      },
      tags: ['layering', 'style', 'tips']
    },
    {
      _id: '4',
      title: 'How to Choose the Perfect Men’s Boots',
      slug: 'choose-perfect-mens-boots',
      visibility: 'public',
      content: [
        'para 1: Boots are a winter staple that no man should overlook. They’re more than just footwear—they’re a statement piece that combines function and style. The right pair of boots can elevate your outfit while ensuring you’re ready for anything, from icy sidewalks to formal events.',
        'para 2: This season, discover the versatility of different boot styles. Chelsea boots offer a sleek and polished look, while rugged lace-up boots provide durability for outdoor adventures. Learn how to match each style to your wardrobe and occasions effortlessly.',
        'para 3: Step up your style game with these winter boot trends. Whether you’re looking for classic leather designs or contemporary updates, we’ve got you covered with our expert recommendations.'
      ],
      author: 'ceo',
      likes: 760,
      views: 14300,
      image: null,
      timestamps: {
        createdAt: '2023-07-10T18:45:00Z',
        updatedAt: '2023-10-30T13:55:12Z'
      },
      tags: ['boots', 'winter', 'footwear']
    },
    {
      _id: '5',
      title: 'Essential Grooming Tips for Winter',
      slug: 'essential-grooming-tips-winter',
      visibility: 'public',
      content: [
        'para 1: Winter can be harsh on your skin, beard, and overall appearance. The cold weather, combined with indoor heating, tends to dry out your skin and hair, leaving you looking less than your best. That’s why winter grooming requires extra attention and care.',
        'para 2: Start with a good moisturizer to combat dryness and keep your skin hydrated. For beard enthusiasts, invest in a quality beard oil or balm to prevent itching and flakiness. Don’t forget your lips—use a nourishing lip balm to avoid chapping.',
        'para 3: With these essential grooming tips, you’ll not only look sharp but also feel confident throughout the season. Stay on top of your game with a consistent routine that’s tailored to winter’s unique challenges.'
      ],
      author: 'ceo',
      likes: 1450,
      views: 18000,
      image: null,
      timestamps: {
        createdAt: '2023-06-01T07:30:45Z',
        updatedAt: '2023-09-15T11:22:38Z'
      },
      tags: ['grooming', 'winter', 'tips']
    },
    {
      _id: '6',
      title: 'How to Build a Versatile Winter Wardrobe',
      slug: 'build-versatile-winter-wardrobe',
      visibility: 'public',
      content: [
        'para 1: Building a versatile winter wardrobe is about more than just layering clothes. It’s about choosing the right key pieces that can be mixed and matched to create a variety of outfits for any occasion.',
        'para 2: Start with timeless items like a good wool coat, a few solid sweaters, and versatile pants that can be dressed up or down. Accessories like scarves, gloves, and hats will complete the look while keeping you warm.',
        'para 3: Explore our guide to find out how to create a winter wardrobe that will serve you all season long and never go out of style.'
      ],
      author: 'ceo',
      likes: 532,
      views: 12800,
      image: null,
      timestamps: {
        createdAt: '2023-11-01T10:12:00Z',
        updatedAt: '2023-12-05T13:48:00Z'
      },
      tags: ['wardrobe', 'winter', 'fashion']
    },
    {
      _id: '7',
      title: 'The Best Fabrics for Winter Clothing',
      slug: 'best-fabrics-winter-clothing',
      visibility: 'public',
      content: [
        'para 1: The fabrics you choose for winter clothing can make or break your outfit. Some materials offer warmth and breathability, while others are perfect for layering and comfort.',
        'para 2: Wool, cashmere, and fleece are some of the most popular fabrics for winter clothing. Learn about the benefits of each material and how to incorporate them into your wardrobe for maximum warmth and style.',
        'para 3: Check out our guide for a deep dive into the best fabrics for winter and how to choose the right ones for your needs.'
      ],
      author: 'ceo',
      likes: 600,
      views: 14000,
      image: null,
      timestamps: {
        createdAt: '2023-10-15T11:30:45Z',
        updatedAt: '2023-11-18T15:05:00Z'
      },
      tags: ['fabrics', 'winter', 'clothing']
    },
    {
      _id: '8',
      title: 'Men’s Winter Skincare Routine for Glowing Skin',
      slug: 'mens-winter-skincare-routine',
      visibility: 'public',
      content: [
        'para 1: Cold winter weather can leave your skin feeling dry and dull. A proper skincare routine can help you maintain healthy, glowing skin despite the harsh elements.',
        'para 2: Use gentle cleansers, moisturizers, and lip balms designed for winter skincare. Don’t forget to exfoliate once or twice a week to remove dead skin cells and keep your complexion fresh.',
        'para 3: Follow our winter skincare tips to keep your skin hydrated, nourished, and glowing throughout the cold season.'
      ],
      author: 'ceo',
      likes: 850,
      views: 16400,
      image: null,
      timestamps: {
        createdAt: '2023-09-25T08:20:35Z',
        updatedAt: '2023-11-12T10:05:00Z'
      },
      tags: ['skincare', 'winter', 'routine']
    },
    {
      _id: '9',
      title: 'Best Winter Jackets for Every Budget',
      slug: 'best-winter-jackets-every-budget',
      visibility: 'public',
      content: [
        'para 1: Finding the right winter jacket is crucial for staying warm and stylish. Whether you’re on a tight budget or ready to invest in a high-end coat, there’s something for every price range.',
        'para 2: From affordable options like puffer jackets to premium choices like wool blends and down coats, we’ve compiled the best winter jackets for every budget. Learn how to choose the right jacket based on your needs and style preferences.',
        'para 3: Check out our guide to find the perfect winter jacket that combines comfort, warmth, and style without breaking the bank.'
      ],
      author: 'ceo',
      likes: 1020,
      views: 19800,
      image: null,
      timestamps: {
        createdAt: '2023-11-10T10:30:12Z',
        updatedAt: '2023-12-02T11:20:45Z'
      },
      tags: ['jackets', 'winter', 'budget']
    }
  ];
  
  
  

  // 1734694634981

