14// Classwork 1

let numbers = [14, 27, 35, 42, 18, 63, 29, 71, 46, 90, 33];
let index = numbers.findIndex((item) => item > 40 && item % 2 === 0)

console.log('ინდექსი: ' + index)
console.log('რიცხვი: ' + numbers[index])



// Classwork 2

let numbers1 = [, 27, 35, 42, 18, 63, 29, 71, 46, 90, 33];
let sum = numbers1.reduce((acc, cur) => acc + cur, 5)

console.log(sum)