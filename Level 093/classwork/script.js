// Classwork 1

let car = {
    name : 'bentley',
    model : 'flying spur',
    motor : 5.5,
    color : 'black'
}

let keyCar = Object.keys(car)
let valueCar = Object.values(car)

keyCar.push('milage')
valueCar.push('3000mile')

for (let i = 0 ; i < keyCar.length ; i++) {
    console.log(`${keyCar[i]} --> ${valueCar[i]}`)
}