// Homework 1

function greet() {
    return 'Hello!'
}

function process(callback) {
    callback()
}

process(greet)


// Homework 2

function sayHello() {
    return 'Hello'
}

function sayBye() {
    return 'Bye'
}

function execute(callback) {
    callback()
}

execute(sayHello)
execute(sayBye)



// Homework 3

function showMessage(callback) {
    callback()
}

function morning(showMessage) {
    return 'Good morning!'
}

function evening(showMessage) {
    return 'Good evening'
}

showMessage(morning)
showMessage(evening)



// Homework 4

function calculate(callback) {
    console.log(callback())
}

function add() {
    return 5 + 5
}

function multiply() {
    return 5 * 5
}

calculate(add)
calculate(multiply)