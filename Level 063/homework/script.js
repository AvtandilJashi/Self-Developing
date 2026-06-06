// Homework 1

let user1 = Number(prompt('Enter your age: '))

if (user1 > 18 && user1 < 60) {
    console.log('თქვენ შეგიძლიათ რეგისტრაცია')
}



// Homework 2

let user2 = prompt('Enter word: ')

if(user2 == 'admin' || user2 == 'moderator') {
    console.log('წვდომა ნებადართულია')
}

else {
    console.log('denied')
}


// Homework 3

let num1 = Number(prompt('Enter number 1 : '))
let num2 = Number(prompt('Enter number 2 :'))

if (num1 > 0 && num2 > 0) {
    console.log('ორივე დადებითია')
}



// Homework 4

let user3 = Number(prompt('Enter your age: '))

if (user1 < 70 || user1 < 13) {
    console.log('სპეციალური კატეგორია')
}



// Homework 5

let username1 = prompt('Enter your username: ')

if (username1 && username1.trim().length() > 5) {
    console.log('სწორი username')
}


// Homework 6

let user4 = prompt('Enter smth: ')

if (user4 || user4.trim() === '') {
    console.log('ტექსტი არ არის შეყვანილი')
}



// Homework 7

let user5 = Number(prompt('Enter your age: '))

if (user5 && user5 > 18) {
    console.log('სრულწლოვანი')
}



// Homework 8

let user6 = prompt('Enter text 1 : ')
let user7 = prompt('Enter text 2 :')

if (user6 && user7 && user6.startWith('A') && user7.startWith('M')) {
    console.log('ორივე სწორ ფორმატშია')
}



// Homework 9

let word1 = prompt('Enter word: ')

if (word1 && word1.length > 10 || word1.startsWith('A')) {
    console.log('კარგი სიტყვაა')
}



// Homework 10

let number1 = Number(prompt('Enter your number: '))
let number2 = Number(prompt('Enter your number:'))

if (number1 && number2 && number1 % 5 == 0 && number2 % 5 == 0) {
    console.log('ორივე 5-ის ჯერადია')
}



// Homework 11

// true || true || false || false || false

// პასუხია: true


