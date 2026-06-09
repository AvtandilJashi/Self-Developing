// Homework 1

function sayHello() {
    return 'Hello, World!'
}

sayHello()
sayHello()
sayHello()



// Homework 2

function greet(name) {
    return `Hello, ${name}!`
}

greet('giorgi')
greet('avto')
greet('goga')



// Homework 3

function sum(a, b) {
    return a * b
}

sum(9, 9)
sum(13, 13)
sum(13, 9)



// Homework 4

function getLength(text) {
    return text.length
}

getLength('me var avto')
getLength('chemi gvaria jashi')
getLength('var 15 wlis')



// Homework 5

function checkEven(number) {
    if (number % 2 == 0) {
        return 'Even'
    }

    else {
        return 'Odd'
    }
}

checkEven(9)
checkEven(13)
checkEven(20)



// Homework 6

function welcome(name = "Guest") {
    return `Welcome, ${name}`
}

welcome('nika')



// Homework 7

function multiply(a = 1, b = 1) {
    return a * b
}

multiply()
multiply(5)
multiply(5, 4)



// Homework 8

function toUpper(text) {
    return text.toUpperCase()
}

toUpper('mari')
toUpper('avto')
toUpper('vato')



// Homework 9

function joinWords(word1, word2) {
    return word1 + word2
}

joinWords('me', 'magida')
joinWords('vatos', 'unda')
joinWords('maris', 'uyvars')