// Classwork 1

function one(score) {
    return Math.round(score), Math.floor(score), Math.trunc(score), Math.ceil(score)
}

one(99.45)



// Classwork 2

function two(x, y) {
    return Math.pow(x, y)
}

two(13, 9)



// Classwork 3

function three(x) {
    return Math.abs(x)
}

two(-143943848384384942)



// Homework 4

function four(y) {
    return Math.sign(y) === 0 ? 0 : Math.sign(y) === 1 ? 1 : 'რიცხვი უარყოფითია'
}   

four(0)



// Homework 5

function five(x) {
    return Math.sqrt(x)
}

five(169)



// Homework 6

console.log(Math.min(2, 5, 8, 90, 73))

console.log(Math.max(123, 2828, 928982, 98))



// Homework 7

console.log(Math.floor(Math.random() * 100) + 1)



// Homework 8

let num = Math.floor(Math.random() * 7 + 1)

num === 1 ? console.log('ორშაბათი') : num === 2 ? console.log('სამშაბათი') : num === 3 ? console.log('ოთხშაბათი') : num === 4 ? console.log('ხუთშაბათი') : num === 5 ? console.log('პარასკევი') : num === 6 ? console.log('შაბათი') : console.log('კვირა')