// Classwork 1

let numbers = [8, 9, -1, -8, 1, 0, 78]

numbers.forEach((item) => {
    if (item > 0) {
        console.log(item)
    }
})



// Classwork 2

let names = ['gio', 'gela', 'nika', 'sandro']

names.forEach((i) => {
    if (i.length > 5 && i.startsWith('g')) {
        console.log(i)
    }
})



// Classwork 3

let numbers2 = [1, 5, 6, 8, 9, 80]

numbers2.map((item1) => {
    return item1 * 3
})

numbers2.forEach((item1) => {
    if (item1 % 2 === 0) {
        console.log(item1)
    }
})



// Classwork 4

let names2 = ['gio', 'gela', 'nika', 'sandro']

names2.map((item2) => {
    if (item2.length < 5) {
        return item2
    }
})

names2.forEach((item2) => {
    console.log(item2)
})