// Homework 1

let products = [
  { name: 'Laptop', price: 1500, category: 'electronics', inStock: true },
  { name: 'Phone', price: 800, category: 'electronics', inStock: false },
  { name: 'Shoes', price: 120, category: 'clothes', inStock: true },
  { name: 'Headphones', price: 200, category: 'electronics', inStock: true },
  { name: 'Jacket', price: 250, category: 'clothes', inStock: true }
]

let filteredProducts = products.filter(product => {
  return product.inStock === true && product.price >= 200
})

let newProducts = filteredProducts.map(product => {
  return {
    name: product.name,
    price: product.price,
    expensive: product.price > 1000
  }
})

newProducts.forEach(product => {
  if (product.expensive) {
    console.log(`${ product.name } - $${ product.price } - Expensive`)
  } else {
    console.log(`${ product.name } - $${ product.price } - Normal`)
  }
})


// Homework 2

let students = [
  { name: 'Nika', score: 95, age: 20 },
  { name: 'Ana', score: 68, age: 19 },
  { name: 'Gio', score: 82, age: 21 },
  { name: 'Mariam', score: 45, age: 20 },
  { name: 'Luka', score: 91, age: 18 },
  { name: 'Saba', score: 59, age: 22 }
]

let filteredStudents = students.filter(student => {
  return student.score >= 70 && student.age >= 18
})

let newStudents = filteredStudents.map(student => {
  let status

  if (student.score >= 90) {
    status = 'Excellent'
  } else if (student.score >= 80) {
    status = 'Very Good'
  } else {
    status = 'Good'
  }

  return {
    name: student.name,
    score: student.score,
    status: status
  }
})

newStudents.forEach(student => {
  console.log(`${ student.name }: ${ student.score } - ${ student.status } `)
})


// Homework 3

let orders = [
  {
    id: 1,
    customer: 'Nika',
    total: 250,
    status: 'completed'
  },
  {
    id: 2,
    customer: 'Ana',
    total: 120,
    status: 'pending'
  },
  {
    id: 3,
    customer: 'Gio',
    total: 500,
    status: 'completed'
  },
  {
    id: 4,
    customer: 'Mariam',
    total: 80,
    status: 'cancelled'
  },
  {
    id: 5,
    customer: 'Luka',
    total: 350,
    status: 'completed'
  }
]

let completedOrders = orders.filter(order => {
  return order.status === 'completed'
})

let newOrders = completedOrders.map(order => {
  let discount

  if (order.total >= 300) {
    discount = order.total * 0.20
  } else {
    discount = order.total * 0.10
  }

  return {
    customer: order.customer,
    total: order.total,
    discount: discount,
    finalPrice: order.total - discount
  }
})

newOrders.forEach(order => {
  console.log(`${ order.customer }: $${ order.total } → Discount: $${ order.discount } → Final: $${ order.finalPrice } `)
})


// Homework 4

let users = [
  {
    name: 'Nika',
    age: 25,
    active: true,
    orders: [120, 250, 80]
  },
  {
    name: 'Ana',
    age: 17,
    active: true,
    orders: [300, 150]
  },
  {
    name: 'Gio',
    age: 30,
    active: false,
    orders: [500, 200, 100]
  },
  {
    name: 'Mariam',
    age: 22,
    active: true,
    orders: [700, 250]
  },
  {
    name: 'Luka',
    age: 28,
    active: true,
    orders: [50, 80, 120]
  }
]

let filteredUsers = users.filter(user => {
  return user.age >= 18 && user.active === true
})

let newUsers = filteredUsers.map(user => {
  let totalOrders = 0

  user.orders.forEach(order => {
    totalOrders += order
  })

  return {
    name: user.name,
    totalOrders: totalOrders,
    orderCount: user.orders.length
  }
})

newUsers.forEach(user => {
  console.log(`${ user.name } - Orders: ${ user.orderCount } - Total: $${ user.totalOrders } `)
})


// Homework 5

let student = {
  name: 'Nika',
  age: 20,
  city: 'Tbilisi',
  score: 85
}

for (let key in student) {
  console.log(`${ key }: ${ student[key] } `)
}



// Homework 6

let product = {
  name: 'Laptop',
  price: 1500,
  category: 'Electronics',
  stock: 5
}

for (let key in product) {
  console.log(`Product ${ key }: ${ product[key] } `)
}



// Homework 7

let user = {
  name: 'Nika',
  age: 21,

  introduce: function() {
    console.log(`My name is ${ this.name } and I am ${ this.age } years old.`)
  }
}

user.introduce()



// Homework 8

let product1 = {
  name: 'Phone',
  price: 800,
  quantity: 3,

  getTotal: function() {
    return this.quantity * this.price
  }
}

console.log(product1.getTotal())



// Homework 9

let car = {
  brand: 'BMW',
  model: 'M5',
  year: 2023,
  color: 'Black',

  showInfo: function() {
    for (let key in this) {
      if (key !== 'showInfo') {
        console.log(`${ key }: ${ this[key] } `)
      }
    }
  }
}

car.showInfo()



// Homework 10

let cart = {
  owner: 'Nika',

  products: {
    laptop: 1500,
    mouse: 50,
    keyboard: 100,
    headphones: 200
  },

  getTotal: function() {
    let total = 0

    for (let product in this.products) {
      total += this.products[product]
    }

    return total
  },

  showProducts: function() {
    for (let product in this.products) {
      console.log(`${ product }: $${ this.products[product] } `)
    }
  }
}

cart.showProducts()

console.log(cart.getTotal())

