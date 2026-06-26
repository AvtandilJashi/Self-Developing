// Homework 1

let isLeapYear = year => year === 'ნაკიანი' ? true : false



// Homework 2

let compareStrings = function(str1, str2) {
    return str1.length > str2.length ? 'Longer' : str2.length > str1.length ? 'Shorter' : 'Equal'
}



// Homework 3

let grade = score => score >= 90 ? 'A' : score >= 80 ? 'B' : score >= 70 ? 'C' : score >= 60 ? 'D' : 'F'



// Homework 4

let findMiddle = function(num1, num2, num3) {
    return num1 + num2 + num3 - Math.min(num1, num2, num3) - Math.max(num1, num2, num3)
}

console.log(findMiddle(700, 499, 900))



// Homework 5

let sallary = (hours, pay, bonus = 0) => {
    return hours < 40 ? hours * pay : hours > 40 ? (hours * pay) + (bonus * hours) : 'sagol'
}



// Homework 6

let isPositive = function(num) {
    return num > 0
}

let Ispositive = (num) => {
    return num > 0
}

let IsPositive = num => num > 0



// Homework 7

let fizzBuzz = num => num % 3 === 0 && num % 5 === 0 ? 'FizzBuzz' :
num % 3 === 0 ? 'Fizz' : num % 5 == 0 ? 'Buzz' : num



// Homework 8

let validPassword = pass => pass.length >= 8 ? true : false

console.log(validPassword('ubsjbbnjxbn'))