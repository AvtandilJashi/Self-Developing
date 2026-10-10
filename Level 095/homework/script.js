// Homework 1

let products = [
    { name: "Laptop", price: 1500, category: "electronics", inStock: true },
    { name: "Phone", price: 800, category: "electronics", inStock: false },
    { name: "Shoes", price: 120, category: "clothes", inStock: true },
    { name: "Headphones", price: 200, category: "electronics", inStock: true },
    { name: "Jacket", price: 250, category: "clothes", inStock: true }
];

let filteredProducts = products.filter((item) => item.inStock && item.price >= 200)

console.log(filteredProducts)

let mappedProducts = filteredProducts.map((item) => {
    return {
        name: item.name,
        price: item.price,
        expensive: item.price > 1000
    }
})

console.log(mappedProducts)

mappedProducts.forEach((item) => {
    if (item.expensive) {
        console.log(`${item.name} - ${item.price} expensive`)
    }

    else {
        console.log(`${item.name} - ${item.price} normal`)
    }
})



// Homework 2

let students = [
    { name: "Nika", score: 95, age: 20 },
    { name: "Ana", score: 68, age: 19 },
    { name: "Gio", score: 82, age: 21 },
    { name: "Mariam", score: 45, age: 20 },
    { name: "Luka", score: 91, age: 18 },
    { name: "Saba", score: 59, age: 22 }
];

let filteredStudents = students.filter((item) => item.score >= 70 && item.age >= 18)

console.log(filteredStudents)

let mappedStudents = filteredStudents.map((item) => {
    return {
        name: item.name,
        score: item.score,
        status: item.score >= 90 ? 'Excellent' : item.score >= 80 ? 'Very Good' : item.score >= 70 ? 'Good' : null
    }
})

console.log(mappedStudents)

mappedStudents.forEach((item) => {
    console.log(`${item.name}: ${item.score} - ${item.status}`)
})



// Homework 3

let orders = [
    {
        id: 1,
        customer: "Nika",
        total: 250,
        status: "completed"
    },
    {
        id: 2,
        customer: "Ana",
        total: 120,
        status: "pending"
    },
    {
        id: 3,
        customer: "Gio",
        total: 500,
        status: "completed"
    },
    {
        id: 4,
        customer: "Mariam",
        total: 80,
        status: "cancelled"
    },
    {
        id: 5,
        customer: "Luka",
        total: 350,
        status: "completed"
    }
];

let filteredOrders = orders.filter((item) => item.status === 'completed')

console.log(filteredOrders)

let mappedOrders = filteredOrders.map((item) => {
    return {
        customer: "Nika",
        total: item.total >= 300 ? item.total -= 20 : item.total -= 10,
        discount: 25,
        finalPrice: 225
    }
})

console.log(mappedOrders)

mappedOrders.forEach((item) => {
    console.log(`${item.customer}: ${item.total} ---> Discount: ${item.discount} ---> Final: ${item.total - item.discount}`)
})



// Homework 4

let users = [
    {
        name: "Nika",
        age: 25,
        active: true,
        orders: [120, 250, 80]
    },
    {
        name: "Ana",
        age: 17,
        active: true,
        orders: [300, 150]
    },
    {
        name: "Gio",
        age: 30,
        active: false,
        orders: [500, 200, 100]
    },
    {
        name: "Mariam",
        age: 22,
        active: true,
        orders: [700, 250]
    },
    {
        name: "Luka",
        age: 28,
        active: true,
        orders: [50, 80, 120]
    }
];

let filteredUsers = users.filter((item) => item.age > 18 && item.active)

console.log(filteredUsers)

let mappedUsers = filteredUsers.map((item) => {
    return {
        name: item.name,
        totalOrders: item.orders.reduce((acc, curr) => acc + curr),
        orderCount: item.orders.length
    }
})

console.log(mappedUsers)

mappedUsers.forEach((item) => {
    console.log(`${item.name} - Orders: ${item.orderCount} - Total: $${item.totalOrders}`)
})



// Homework 5

let student = {
    name: "Nika",
    age: 20,
    city: "Tbilisi",
    score: 85
};

for (let i in student) {
    console.log(i)
    console.log(student[i])
}



// Homework 6

let product2 = {
    name: "Laptop",
    price: 1500,
    category: "Electronics",
    stock: 5
};

for (let i in product2) {
    console.log(`Product ${i}: ${product2[i]}`)
}



// Homework 7

let user = {
    name: "Nika",
    age: 21,

    introduce: function () {
        console.log(`my name is ${this.name} and i am ${this.age} years old.`)
    }
};

user.introduce()



// Homework 8

let product3 = {
  name: "Phone",
  price: 800,
  quantity: 3,

  getTotal: function() {
    console.log(`${this.name} მთლიანი ფასი არის ${this.quantity * this.price}₾.`)
  }
};

product3.getTotal()



// Homework 9

let car = {
  brand: "BMW",
  model: "M5",
  year: 2023,
  color: "Black",

  showInfo: function() {
    for (let i in this) {
        if (i !== "showInfo") 
        console.log(`${i}: ${this[i]}`)
    }
  }
};

car.showInfo()


