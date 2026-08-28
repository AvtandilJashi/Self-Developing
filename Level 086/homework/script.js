// Homework 1

let numbers1 = [13, 27, 44, 51, 62, 38, 75, 80, 91];

numbers1.findIndex((item1) => item1 > 50 && item1 % 2 == 0)



// Homework 2

let numbers2 = [15, 22, 37, 48, 63, 72, 81, 94, 105];

numbers2.findIndex((item2) => item2 > 60 && item2 % 3 === 0)



// Homework 3

let numbers3 = [-10, -5, 7, 13, 18, 21, 26, 31];

numbers3.findIndex((item3) => item3 > 0 && item3 % 2 === 0 && item3 > 15)



// Homework 4

let numbers4 = [12, 25, 36, 49, 54, 63, 72, 81, 90];

numbers4.findIndex((item4) => item4 > 40 && item4 % 2 === 0 && item4 % 6 === 0)



// Homework 5

let numbers5 = [12, 7, 20, 15, 8, 31, 44, 9];

numbers5.reduce((acc, curr) => {
    if (curr % 2 === 0) {
        return acc + curr
    }

    return acc
})



// Homework 6

let numbers6 = [50, 120, 75, 200, 30, 150, 90];

numbers6.reduce((acc1, curr1) => {
    if (curr1 > 100) {
        return acc1 + curr1
    }

    return acc1
})



// Homework 7

let numbers7 = [12, 5, 8, 17, 22, 31, 40, 9, 16];

numbers7.reduce((acc2, curr2) => {
    if (curr2 % 2 === 0) {
        return acc2++
    }

    return acc2
}, 0)



// Homework 8

let numbers8 = [45, 12, 89, 34, 102, 67, 23];

numbers8.reduce((acc3, curr3) => {
    if (curr3 > acc3) {
        return curr3
    }

    return acc3

}, numbers8[0])



// Homework 9

let numbers9 = [15, 22, 8, 35, 41, 12, 50, 27, 60];

let reducednumbers9 = numbers9.reduce((acc4, curr4) => {
    if (curr4 % 2 === 0) {
        return acc4 + curr4
    }

    return acc4
})

let tworeducednumbers9 = numbers9.reduce((acc4, curr4) => {
    if (curr4 % 2 === 0) {
        return acc4++
    }

    return acc4
}, 0)

let arithmetuchal = reducednumbers9 / tworeducednumbers9

numbers9.findIndex((item5) => item5 > arithmetuchal && item5 % 2 !== 0)



// Homework 10

let numbers10 = [12, 45, 18, 33, 60, 27, 72, 15, 90, 21];

let reducednumbers10 = numbers10.reduce((acc5, curr5) => {
    if (curr5 > 20) {
        return acc5 + curr5
    }

    return acc5
})

let tworeducednumbers10 = numbers10.reduce((acc5, curr5) => {
    if (curr5 > 20) {
        return acc5++
    }

    return acc5
})

numbers10.findIndex((item6) => item6 % 2 === 0 && item6 > tworeducednumbers10)