// Homework 1

let user1 = prompt('Enter your age: ')

let user1 = Number(user1)

if (user >= 18) {
    console.log('Adult')
}

else {
    console.log('Minor')
}



// Homework 2

let user2 = Number(prompt('Enter number 1: '))
let user3 = Number(prompt('Enter number 2: '))

if (user2 > user3) {
    console.log('First is bigger')
}

else {
    console.log('Equal or less')
}



// Homework 3

let user4 = prompt('Enter your password: ')

if (user4 == 'admin123') {
    console.log('Correct password')
}

else {
    console.log('Wrong password')
}



// Homework 4

let user5 = prompt('Enter value: ')

if (typeof(user5) === 'string') {
    console.log('this is string')
}

else {
    console.log('other type')
}



// Homework 5

let user6 = prompt('Enter word: ')

if (user6.length >= 5) {
    console.log('Long word')
}

else {
    console.log('Short word')
}



// Homework 6

let user7 = Number(prompt('Enter number: '))

if (user7 % 2 == 0) {
    console.log('Even')
}

else {
    console.log('Odd')
}



// Homework 7

let user8 = prompt('Enter your name: ')

if (user8 !== '') {
    console.log(`Hello ${user8}`)
}

else {
    console.log('Name is empty')
}



// Homework 8

let user9 = prompt('Enter value 1: ')
let user10 = prompt('Enter value 2: ')

if (user9 === user10) {
    console.log('Same text')
}

else {
    console.log('Different text')
}



// Homework 9

let user11 = Number(prompt('Enter your score: '))

if (user9 >= 50) {
    console.log('Passed')
}

else {
    console.log('Failed')
}



// Homework 10

let user12 = prompt('Enter word: ')
let user13 = prompt('Enter letter: ')

if (user12.startsWith(user13)) {
    console.log('CORRECT')
}

else {
    console.log('INCORRECT')
}