// Homework 1

let i = 1

do {
    console.log(i)
    i++
} 

while (i <= 10)



// Homework 2

let i = 1

do {
    if (i % 2 !== 0) {
        console.log(i)
    }
    i++
} 

while (i <= 20)



// Homework 3

let i = 20

do {
    console.log(i)
    i--
} 

while (i >= 1)



// Homework 4

let i = 1
let sum = 0

do {
    sum += i
    i++
} 

while (i <= 50)

console.log(sum)



// Homework 5

let fruits = ['Apple', 'Banana', 'Orange', 'Kiwi', 'Mango']

let i = 0

do {
    console.log(fruits[i])
    i++
} 

while (i < fruits.length)



// Homework 6

let numbers = [7, 13, 9, 18, 25, 30]

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i])
        break
    }
}



// Homework 7

let numbers = [5, 12, -8, 10, -3]

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
        console.log(numbers[i])
        break
    }
}



// Homework 8

let numbers = [25, 48, 99, 150, 200]

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 100) {
        console.log(numbers[i])
        break
    }
}



// Homework 9

let words = ['Dog', 'Cat', 'Bird', 'Fish']

for (let i = 0; i < words.length; i++) {
    if (words[i] === 'Bird') {
        console.log(i)
        break
    }
}