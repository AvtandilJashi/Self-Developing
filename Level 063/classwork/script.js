// Classwork 1

let name1 = prompt('Enter your name: ')
let age1 = Number(prompt('Enter your age: '))

if (name1 === 'goga' && age1 >= 18) {
    console.log(`MY NAME IS ${name1} AND MY AGE IS ${age1}`)
}

else {
    console.log('i dont know you')
}



// Classwork 2

let number1 = Number(prompt('Enter number: '))

if (number1 > 100 || number1 % 2 == 0) {
    console.log('even or more than 100')
}

else {
    console.log('odd or less tnan 100')
}



// Classwork 3

let correct = 139

if (correct) {
    console.log('i am truthy')
}

else {
    console.log('i am falsey')
}



// Classwork 4

let word = 'something'
let int = 139

if (word && int) {
    console.log('we both truthy')
}

else {
    console.log('one of us or both are falsey')
}