// Homework 1

let user1 = prompt('Enter value: ')

if (user1) {
    console.log('მნიშვნელობა არსებობს')
}

else {
    console.log('მნიშვნელობა ცარიელია')
}



// Homework 2

let nickname

console.log('Guest' || nickname)



// Homework 3

let user2 = prompt('Enter text: ')

if (user2 && user2.trim().length() > 5) {
    console.log('გრძელი ტექსტია')
}

else {
    console.log('მოკლე ტექსტია')
}



// Homework 4

let user3 = Number(prompt('Enter your age: '))

if (user3 && user3 > 18) {
    console.log('სრულწლოვანი')
}

else {
    console.log('ასაკი არ არის შეყვანილი')
}



// Homework 5

let user4 = prompt('Enter smth: ')
let user5 = prompt('Enter smth: ')

if (user4 && user5) {
    console.log('ორივე სწორია')
}

else {
    console.log('რომელიღაც ცარიელია')
}



// Homework 6

let isNum = 0;
let result = isNum || "other nym";

console.log(result)

// ჩვენ კონსოლში მივიღებთ "other nym" იმიტომ რომ ეს პირობა იგივეა რაც false || true და როგორც მოგეხსენებათ ||-ამის შემთხვევაში true-ს აქვს უპირატესობა.



// Homework 7

let user6 = prompt('Enter text: ')

if (typeof(user6) === 'string' && user6 && user6.length % 3 == 0) {
    console.log('Special string')
}

else {
    console.log('Normal string')
}



// Homework 8

let username1 = prompt('Enter username 1 :')
let username2 = prompt('Enter username 2 :')

if (username1.startsWith('go') && username2.startsWith('go') && username1 !== username2 && username1.length >= 6 && username2.length >= 6) {
    console.log('Matching users')
}

else {
    console.log('Users failed')
}



// Homework 9

let password1 = prompt('Enter password 1 :')
let password2 = prompt('Enter password 2 :')

if (password1 === password2 && password1.length > 8 && password1.toUpperCase() !== password1) {
    console.log('Passwords match')
}

else {
    console.log('Passwords do not match')
}



// Homework 10

let user7 = prompt('Enter text: ')

if (user7.startsWith('java') || user7.length > 20) {
    console.log('Programming text')
}

else if (user7.length < 5) {
    console.log('Too short')
}

else {
    console.log('Unknown text')
}



// Homework 11

let username = prompt('Enter your username: ')
let role = prompt('Enter your role: ')

if (username.startsWith('user') && role.toLowerCase() === 'admin') {
    console.log('Fake admin')
}

else if (username.startsWith('admin') && username.toLowerCase() === 'admin') {
    console.log('Real admin')
}

else {
    console.log('Normal user')
}