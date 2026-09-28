// Classwork 1

let products = [
  { name: "Laptop", price: 1200, inStock: true },
  { name: "Phone", price: 700, inStock: false },
  { name: "Headphones", price: 100, inStock: true },
  { name: "Monitor", price: 400, inStock: true }
]

let sum = 0

for (let i of products) {
    sum += i.price
}

console.log(sum)



// Classwork 2

for (let i of products) {
    if (i.inStock === true && i.price < 800) {
        console.log('Product is available and affordable')
    }

    else {
        console.log('Product is not available')
    }
}



// Classwork 3

let employees = [
  { name: "Nika", age: 25, salary: 1800, experience: 2, active: true },
  { name: "Ana", age: 31, salary: 2500, experience: 5, active: true },
  { name: "Gio", age: 22, salary: 1400, experience: 1, active: false },
  { name: "Mariam", age: 28, salary: 2200, experience: 4, active: true }
];


for (let i of employees) {
    console.log(i.active === true && (i.salary > 2000 || i.experience >= 4) ? 'Ana gets a bonus' : 'Ana does not get a bonus')
}



// Classwork 4

let product2 = [
  { name: "Laptop", price: 1200, inStock: true },
  { name: "Mouse", price: 50, inStock: true },
  { name: "Phone", price: 800, inStock: false },
  { name: "Monitor", price: 400, inStock: true }
]

let filteredProduct2 = product2.filter((item) => item.inStock && item.price > 500)

console.log(filteredProduct2)



// Classwork 5

let users = [
  { name: "Nika", age: 22, balance: 1500, active: true },
  { name: "Ana", age: 17, balance: 2000, active: true },
  { name: "Gio", age: 30, balance: 500, active: false },
  { name: "Mariam", age: 25, balance: 3000, active: true },
  { name: "Luka", age: 19, balance: 800, active: false }
]

let filteredUsers = users.filter((item) => item.age >= 18 && item.active && item.balance > 1000)
let mappedUsers = filteredUsers.map((item) => {
    return {
        name : item.name,
        balance : item.balance
    }
})

console.log(mappedUsers)

mappedUsers.forEach((item) => {
    console.log(`${item.name} has ${item.balance}`)
})

