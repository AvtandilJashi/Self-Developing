// Homework 1

let student = {
    name: "Giorgi",
    age: 17,
    grade: 85,
    city: "Tbilisi"
}

student.grade = 95
student["city"] = "Batumi"
student.subject = "JavaScript"
delete student["age"]

console.log(student)



// Homework 2

let user = {
    username: "goga",
    age: 22,
    "favorite color": "black",
    "account type": "premium"
}

console.log(user.username)
console.log(user["favorite color"])

user["favorite color"] = "blue"
user["account type"] = "VIP"
user["last login"] = "Today"
delete user.age

console.log(user)



// Homework 3

let product = {
    name: "Laptop",
    price: 2500,
    brand: "Lenovo",
    stock: 12
}

product.price = 2200
product["stock"] = 8
product.brand = "ASUS"
product.discount = 15
product["product code"] = "LP2026"
delete product.stock

console.log(product)



// Homework 4

let car = {
    brand: "BMW",
    model: "X5",
    year: 2018,
    color: "red",
    price: 45000
}

car.year = 2022
car.color = "black"
car.price = 52000
car.engine = "3.0"
car["car type"] = "SUV"
delete car.year

console.log(car)



// Homework 5

let profile = {
    username: "nika123",
    age: 19,
    country: "Georgia",
    "favorite game": "Minecraft",
    points: 450
}

profile.username = "nika_2007"
profile.age = 20
profile.country = "Germany"
profile["favorite game"] = "GTA V"
profile.points = 700

profile.status = "active"
profile["account level"] = "gold"
delete profile.age

console.log(profile)



// Homework 6

let movie = {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    rating: 8.8
}

movie["movie director"] = movie.director
delete movie.director

movie.rating = 9
movie["movie status"] = "Popular"

console.log(movie)



// Homework 7

let student = {
    name: "Giorgi",
    age: 17,
    grades: [85, 90, 78, 92],
    city: "Tbilisi"
}

console.log(student.name)
console.log(student.grades[0])

student.grades[student.grades.length - 1] = 95
student.grades.push(88)
student.age = 18
student.subject = "JavaScript"
delete student.city

console.log(student)



// Homework 8

let product = {
    name: "T-Shirt",
    price: 50,
    colors: ["black", "white", "red"],
    sizes: ["S", "M", "L"]
}

console.log(product.name)
console.log(product.colors[0])

product.colors[2] = "blue"
product.colors.push("green")
product.sizes[0] = "XS"
product.brand = "Nike"
delete product.price

console.log(product)

