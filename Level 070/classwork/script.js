// Classwork 1

let one = function(a, b) {
    return a > b ? 'first greater' : 'second greater'
}

console.log(one(13, 9))



// Classwork 2

let two = (num = 139) => {
    return num % 2 == 0 ? 'even' : 'odd'
}

console.log(two())
console.log(two(931))



// Classwork 3

let three = num => num * num

console.log(three(13))



// Classwork 4

let four = (a, b, c) => Math.max(a, b, c)

console.log(four(13, 9, 139))