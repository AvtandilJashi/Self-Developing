// Homework 1

let ages = [12, 18, 25, 14, 30, 16, 21, 10];

let filteredage = ages.filter((item) => item >= 18 && item)



// Homework 2

let prices = [20, 50, 100, 35, 80];

let filteredprices = prices.map((item1) => item1 * 20)



// Homework 3

let numbers = [5, 10, 15, 20, 25];

numbers.forEach((item2) => console.log('რიცხვი: ' + item2))



// Homework 4

let numbers3 = [3, 8, 12, 5, 20, 7, 15, 2];

let filteresnumbers3 = numbers3.filter((item3) => item3 > 10 && item3)
let mapednumbers3 = numbers3.map((item3) => item3 * 2)



// Homework 5

let names = ["gio", "nika", "ana", "luka"];

let mapednames = names.map((item4) => item3.toUpperCase())
mapednames.forEach((item4) => console.log(item4))



// Homework 6

let numbers1 = [10, 3, 25, 8, 40, 15, 2];

let filterednumbers1 = numbers1.filter((item5) => item5 > 10)
filterednumbers1.forEach((item5) => console.log('დიდი რიცხვია: ' + item5))



// Homework 7

let words = ["cat", "elephant", "dog", "computer", "sun", "javascript"];

let filteredwords = words.filter((item6) => item6.length > 6)
filteredwords.map((item6) => item6.toUpperCase())



// Homework 8

let numbers2 = [4, 15, 8, 22, 31, 6, 18, 45, 10, 3];

let filterednumbers2 = numbers2.filter((item7) => item7 > 10)
let mapednumbers2 = filterednumbers2.map((item7) => item7 * 2)
let twomapednumbers2 = mapednumbers2.map((item7) => item7 + 5)
twomapednumbers2.forEach((item7) => console.log('შედეგი: ' + item7))