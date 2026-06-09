// Classwork 1

function info(name, surname, age, adress) {
    console.log(`my name is ${name} and my surname is ${surname}, i am ${age} years old and i live in ${adress}`)
}

info('avto', 'jashi', 15, 'tbilisi')
info('mari', 'kordzakhia', 16, 'tbilisi')
info('goga', 'chalauri', 21, 'gori')



// Classwork 2

function car(brand = 'bentley', year = 2017, color = 'black') {
    console.log(`this car is ${brand}, it is from ${year} and it is ${color}`)
}

car()
car('mercedes', 2019, 'white')