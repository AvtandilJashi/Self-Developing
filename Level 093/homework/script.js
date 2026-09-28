// Homework 1

const user = {
  name: "Goga",
  age: 20,
  city: "Tbilisi",
  isStudent: true
}

let allKey = Object.keys(user) 

for (let i of allKey) {
    console.log(i)
}



// Homework 2

let allValues = Object.values(user)

for (let i of allValues) {
    console.log(i)
}



// Homework 3

const product = {
  name: "Laptop",
  price: 2500,
  category: "Electronics",
  inStock: true
}

for (let i in product) {
    console.log(i, product[i])
}



// Homework 4

const student = {
  name: "Nika",
  math: 95,
  english: 72,
  programming: 100,
  history: 65
}

let sum = 0

for (let i in student) {
    if (student[i] > 80) {
        console.log(student[i])
        sum++

         
    }
}

console.log(sum)



// Homework 5

const products2 = {
  laptop: 2500,
  phone: 900,
  tablet: 700,
  monitor: 1200,
  mouse: 80,
  keyboard: 150
}

let allKeys2 = Object.keys(products2)
let allValues2 = Object.values(products2)
let maxPrice = Math.max(...allValues2)
let minPrice = Math.min(...allValues2)

let sum1 = 0

for (let i of allValues2) {
    console.log(i)
    sum1 += i
}

let average = sum1 / allKeys2.length

let more_than_thousands = 0

for (let i in products2) {
    if (products2[i] > 1000) {
        more_than_thousands++
    }

    console.log(`${i} --> ${student[i]}`)
}

