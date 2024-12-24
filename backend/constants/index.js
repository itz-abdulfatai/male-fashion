  const mockProducts = [
    {
      _id: "product1",
      name: "Men's Slim Fit Jeans",
      category: "Jeans",
      subcategory: "Slim Fit",
      brand: "Levi",
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
      _id: "product51",
      name: "Men's Denim Jacket",
      category: "Jackets",
      subcategory: "Casual",
      brand: "Levi's",
      price: 5999,
      discountPrice: 4999,
      stock: 40,
      sizes: ["S", "M", "L", "XL"],
      color: "Blue",
      images: [{ URL: null, deletehash: null }, { URL: null, deletehash: null }],
      views: 180,
      createdBy: "admin1",
      tags: ["casual", "fashion", "denim"],
      timestamps: { createdAt: new Date(), updatedAt: new Date() },
      review: {
        count: 75,
        rating: 4.5
      }
    },
    {
      _id: "product52",
      name: "Men's Chino Pants",
      category: "Pants",
      brand: "Dockers",
      price: 3499,
      stock: 60,
      sizes: ["30", "32", "34", "36"],
      color: "Khaki",
      images: [{ URL: null, deletehash: null }],
      views: 120,
      createdBy: "admin2",
      tags: ["casual", "officewear"],
      timestamps: { createdAt: new Date(), updatedAt: new Date() },
      review: {
        count: 55,
        rating: 4.2
      }
    },
    {
      _id: "product53",
      name: "Men's Striped Polo Shirt",
      category: "Shirts",
      subcategory: "Polo",
      brand: "Ralph Lauren",
      price: 4499,
      stock: 45,
      sizes: ["S", "M", "L", "XL"],
      color: "Navy/White",
      images: [{ URL: null, deletehash: null }],
      views: 95,
      createdBy: "ceo",
      tags: ["casual", "preppy"],
      timestamps: { createdAt: new Date(), updatedAt: new Date() },
      review: {
        count: 40,
        rating: 4.3
      }
    },
    {
      _id: "product54",
      name: "Men's Leather Loafers",
      category: "Footwear",
      brand: "Cole Haan",
      price: 7999,
      stock: 30,
      sizes: ["8", "9", "10", "11"],
      color: "Brown",
      images: [{ URL: null, deletehash: null }],
      views: 110,
      createdBy: "admin1",
      tags: ["formal", "comfort"],
      timestamps: { createdAt: new Date(), updatedAt: new Date() },
      review: {
        count: 35,
        rating: 4.6
      }
    },
    {
      _id: "product55",
      name: "Men's Puffer Vest",
      category: "Outerwear",
      brand: "The North Face",
      price: 4999,
      discountPrice: 3999,
      stock: 50,
      sizes: ["S", "M", "L", "XL"],
      color: "Black",
      images: [{ URL: null, deletehash: null }],
      views: 85,
      createdBy: "admin2",
      tags: ["outdoor", "winter"],
      timestamps: { createdAt: new Date(), updatedAt: new Date() },
      review: {
        count: 30,
        rating: 4.4
      }
    },
    {
      _id: "product56",
      name: "Men's Slim Fit Dress Pants",
      category: "Pants",
      subcategory: "Dress",
      brand: "Calvin Klein",
      price: 5499,
      stock: 40,
      sizes: ["30", "32", "34", "36"],
      color: "Charcoal",
      images: [{ URL: null, deletehash: null }],
      views: 70,
      createdBy: "ceo",
      tags: ["formal", "officewear"],
      timestamps: { createdAt: new Date(), updatedAt: new Date() },
      review: {
        count: 25,
        rating: 4.1
      }
    },
    {
      _id: "product57",
      name: "Men's Graphic T-Shirt",
      category: "T-shirts",
      brand: "Adidas",
      price: 1999,
      stock: 100,
      sizes: ["S", "M", "L", "XL"],
      color: "White",
      images: [{ URL: null, deletehash: null }],
      views: 150,
      createdBy: "admin1",
      tags: ["casual", "sportswear"],
      timestamps: { createdAt: new Date(), updatedAt: new Date() },
      review: {
        count: 60,
        rating: 4.0
      }
    },
    {
      _id: "product58",
      name: "Men's Suede Chelsea Boots",
      category: "Footwear",
      brand: "Clarks",
      price: 8999,
      stock: 25,
      sizes: ["8", "9", "10", "11"],
      color: "Tan",
      images: [{ URL: null, deletehash: null }],
      views: 90,
      createdBy: "admin2",
      tags: ["casual", "fashion"],
      timestamps: { createdAt: new Date(), updatedAt: new Date() },
      review: {
        count: 20,
        rating: 4.7
      }
    },
    {
      _id: "product59",
      name: "Men's Plaid Flannel Shirt",
      category: "Shirts",
      subcategory: "Casual",
      brand: "L.L.Bean",
      price: 3999,
      stock: 55,
      sizes: ["S", "M", "L", "XL"],
      color: "Red/Black",
      images: [{ URL: null, deletehash: null }],
      views: 80,
      createdBy: "ceo",
      tags: ["casual", "winter"],
      timestamps: { createdAt: new Date(), updatedAt: new Date() },
      review: {
        count: 45,
        rating: 4.5
      }
    },
    {
      _id: "product60",
      name: "Men's Swim Trunks",
      category: "Swimwear",
      brand: "Speedo",
      price: 2499,
      stock: 70,
      sizes: ["S", "M", "L", "XL"],
      color: "Navy",
      images: [{ URL: null, deletehash: null }],
      views: 60,
      createdBy: "admin1",
      tags: ["summer", "beach"],
      timestamps: { createdAt: new Date(), updatedAt: new Date() },
      review: {
        count: 15,
        rating: 4.2
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
      name: "Men's blue Leather Jacket",
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
      brand: 'dior',

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


  module.exports = {mockProducts};