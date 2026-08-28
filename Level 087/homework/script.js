// Homework 1

let numbers1 = [-5, -2, -8, 3, -10, -7]
console.log(numbers1.some(num => num > 0))



// Homework 2

let numbers2 = [25, 45, 67, 89, 120, 34]
console.log(numbers2.some(num => num > 100))



// Homework 3

let numbers3 = [5, 7, 9, 12, 15]
console.log(numbers3.some(num => num % 2 === 0))



// Homework 4

let words = ["cat", "dog", "elephant", "sun", "car"]
console.log(words.some(word => word.length > 5))



// Homework 5

let names1 = ["Giorgi", "Nika", "Goga", "Dato", "Saba"]
console.log(names1.some(name => name.startsWith('G')))



// Homework 6

let numbers4 = [5, 12, 8, 23, 41, 7]
console.log(numbers4.every(num => num > 0))



// Homework 7

let numbers5 = [12, 8, 24, 36, 40, 18]
console.log(numbers5.every(num => num % 2 === 0))



// Homework 8

let numbers6 = [12, 25, 43, 18, 49, 31]
console.log(numbers6.every(num => num < 50))



// Homework 9

let words2 = ["apple", "banana", "orange", "grape"]
console.log(words2.every(word => word.length > 4))



// Homework 10

let numbers7 = [12, 25, 36, 47, 58, 61, 72]

let hasBigNumber = numbers7.some(num => num > 50)
let allPositive = numbers7.every(num => num > 0)

console.log(hasBigNumber)
console.log(allPositive)



// Homework 11

let names2 = ["Giorgi", "Giga", "Nika", "Goga", "Dato"]

let hasG = names2.some(name => name.startsWith('G'))
let allG = names2.every(name => name.startsWith('G'))

console.log(hasG)
console.log(allG)



// Homework 12

let numbers = [25, 47, 89, 120, 156, 8]

let hasOver100 = numbers.some(num => num > 100)
let hasOddOver50 = numbers.some(num => num % 2 !== 0 && num > 50)
let allOver10 = numbers.every(num => num > 10)
let allUnder200 = numbers.every(num => num < 200)