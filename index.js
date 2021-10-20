const products = [
  {
    id: 1,
    name: 'Iphone 11',
    tags: ['smartphone', 'tech', 'apple']
  },
    {
    id: 2,
    name: 'Macbook Pro',
    tags: ['laptop', 'tech', 'apple']
  },
    {
    id: 3,
    name: 'JBL Headphones',
    tags: ['headphone', 'tech', 'jbl']
  },
    {
    id: 4,
    name: 'Nike Shorts',
    tags: ['shorts', 'clothing', 'nike']
  },
];

function filterProducts (category) {
  let filteredProducts = []
  for (i=0; i<products.length; i++) {
    for (j=0; j<products[i].tags.length ; j++) {
      if (products[i].tags[j] === category ) {
        filteredProducts.push(products[i])
      }
    }
  }
  return filteredProducts
}

console.log (filterProducts('tech'))

