// Classwork 1

let me = {
    name : 'atuka',
    lastname : 'jashi',
    height : 1.79,
    'my profession' : 'programmist',
    'my fav car' : 'bentley',
    'my mentor' : 'goga'
}

console.log(me.name)
console.log(me.lastname)
console.log(me.height)
console.log(me['my profession'])
console.log(me['my fav car'])
console.log(me['my mentor'])



// Classwork 2

let car = {
    'car brand' : 'bentley',
    'car model' : 'flying spur',
    year : 2019,
    motor : 5.0
}

car.interior = 'red'
delete car.year
delete car['car model']
car.motor = 5.5

console.log(car)