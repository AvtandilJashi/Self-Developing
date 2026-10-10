// 1

let products = [
    { name: "Laptop", category: "electronics", price: 1800, quantity: 4, rating: 4.8, discount: 10 },
    { name: "Phone", category: "electronics", price: 900, quantity: 2, rating: 4.2, discount: 5 },
    { name: "Shoes", category: "clothes", price: 250, quantity: 8, rating: 4.6, discount: 20 },
    { name: "Watch", category: "accessories", price: 500, quantity: 3, rating: 4.9, discount: 15 },
    { name: "Jacket", category: "clothes", price: 400, quantity: 5, rating: 3.8, discount: 10 },
    { name: "Tablet", category: "electronics", price: 700, quantity: 6, rating: 4.7, discount: 25 }
];

let filteredProducts = products.filter((item) => item.rating >= 4.5 && item.quantity >= 3 && item.price > 300)
let mappedProducts = filteredProducts.map((item) => {

    let finalPrice = item.price - (item.price * item.discount / 100);

    return {
        name: item.name,
        finalPrice: finalPrice,
        totalValue: finalPrice * item.quantity,
        status: item.rating >= 4.8 ? 'Top Product' : 'Regular Product'
    }
})

mappedProducts.forEach((item) => console.log(item))



// 2

let students = [
  { name: "Nika", age: 17, math: 95, english: 88, attendance: 92, submitted: true },
  { name: "Ana", age: 19, math: 78, english: 91, attendance: 85, submitted: true },
  { name: "Gio", age: 20, math: 88, english: 72, attendance: 65, submitted: true },
  { name: "Mariam", age: 18, math: 97, english: 96, attendance: 98, submitted: true },
  { name: "Luka", age: 21, math: 60, english: 75, attendance: 90, submitted: false },
  { name: "Saba", age: 19, math: 84, english: 89, attendance: 82, submitted: true },
  { name: "Tako", age: 22, math: 92, english: 94, attendance: 70, submitted: true }
];

let filteredStudents = students.filter((item) => item.math > 80 && item.english > 80 && item.attendance >= 80 && item.submitted)
let mappedStudents = filteredStudents.map((item) => {

    let average = (item.english + item.math) / 2

    return {
        name: item.name,
        average: average,
        attendance: item.attendance,
        result: Math.round(average) >= 90 ? 'Excellent' : 'Passed'
    }
})

mappedStudents.forEach((item) => console.log(item))



// 3

let games = [
  { name: "Elden Ring", genre: "RPG", price: 60, hours: 120, rating: 9.5, multiplayer: false },
  { name: "Minecraft", genre: "Adventure", price: 30, hours: 200, rating: 9.0, multiplayer: true },
  { name: "FIFA", genre: "Sport", price: 70, hours: 80, rating: 7.5, multiplayer: true },
  { name: "Cyberpunk", genre: "RPG", price: 50, hours: 100, rating: 8.8, multiplayer: false },
  { name: "Fortnite", genre: "Action", price: 0, hours: 300, rating: 8.5, multiplayer: true },
  { name: "God of War", genre: "Action", price: 45, hours: 60, rating: 9.2, multiplayer: false }
];

let filteredGames = games.filter((item) => item.rating >= 8.5 && item.hours >= 100 && item.price <= 60)
let mappedGames = filteredGames.map((item) => {

    return {
        name: item.name,
        genre: item.genre,
        totalCost: Math.round(item.price) > 0 ? Math.round(item.price) * 1.18 : 0,
        type: item.multiplayer ? 'Online Game' : 'Single Player'
    }
})

mappedGames.forEach((item) => console.log(item))