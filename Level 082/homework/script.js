// Homework 1

let num = 0

while (num < 20) {
    console.log(num)
    num += 1
}



// Homework 2

let num1 = 20

while (num1 > 0) {
    console.log(num1)
    num1--
}



// Homework 3

let num2 = 10

while (num2 < 50) {
    console.log(num2)
    num2 += 5
}



// Homework 4

let num3 = 0
let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

while (num3 < list.length) {
    console.log(list[num3])
    num3++
}



// Homework 5

let num4 = 0
let list1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

while (num4 < list1.length) {
    if (list1[num4] % 2 === 0) {
        console.log(list1[num4])
    }

    num4++
}



// Homework 6

let num5 = 0
let list2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

while (num5 < list2.length) {
    if (list2[num5] % 2 !== 0) {
        console.log(list2[num5])
    }

    num5++
}



// Homework 7

let num6 = 0
let list3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let sum = 0

while (num6 < list3.length) {
    sum += list3[num6]
    num6++
}

console.log(sum)



// Homework 8

let num7 = 0
let list4 = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10]
let count = 0

while (num7 < list4.length) {
    if (list4[num7] < 0) {
        count++
    }

    num7++
}

console.log(count)



// Homework 9

let list5 = ['Apple', 'Cat', 'Banana']

let num8 = 0

while (num8 < list5.length) {
    console.log(list5[num8] + '->' + list5[num8].length)
    num8++
}



// Homework 10

let list6 = ['Apple', 'Cat', 'Banana']

let num9 = 0

while (num9 < list6.length) {
    console.log(num9 + '->' + list6[num9])
    num9++
}