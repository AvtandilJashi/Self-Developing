// Homework 1

let school = '208 public'

function showSchool() {
    // იმიტო აქვს ამ ცვლადს ფუნქციაზე წვდომა რომ ეს ცვლადი გლობალურია
}



// Homework 2

function createSecret() {
    let secretCode = 'ბარიატრია არ გამიკეთებია'
    console.log(secretCode)
}

console.log(secretCode)

// ერორი წერს რომ არ არსებობს და მიზეზი ისაა ამ ერორის რომ მართლაც არ არსებობს მხოლოდ ფუნქციაში არსებობს და არი ლოკალური ცვლადი



// Homework 3

if (true) {
    let age = 18
}

console.log(age)

// არ იმუშავებს რადგან ესეც ლოკალურია if ბლოკში და არ არის გლობალური ცვლადი



// Homework 4

if (true) {
    var name = "Goga";
    let Name = 'avto'
}

console.log(name)
console.log(Name)

// დაიბეჭდება var-ით რადგან ვარს არაინტერესებს არაფერი და მაინც იმუშავებს let-ით არ იმუშავებს



// Homework 5

// აგიხსნი მაგას გაკვეთილზე მეზარება ამდენი წერა სიტყვიერად



// Homework 6

let colors = ['black', 'white', 'blue', 'red', 'green']

console.log(color[0])



// Homework 7

let animals = ['black panther', 'dog', 'bear', 'lion']

console.log(animals[animals.length - 1])



// Homework 8

let numbers = [1, 2, 3, 4, 5, 6]

console.log(numbers[0])
console.log(numbers[2])
console.log(numbers[4])



// Homework 9

let countries = ['georgia', 'brazil', 'spain', 'netherland', 'switzerland']

console.log(countries[1])



// Homework 10

let languages = ["HTML", "CSS", "JavaScript"]

console.log(languages[languages.length - 1])



// Homework 11

let fruits = ['watermelon', 'peach', 'apple', 'grape', 'pear', 'melon', 'strawberry']

console.log(fruits[0])
console.log(fruits[fruits.length - 1])



// Homework 12

let names = ["Goga", "Nika", "Luka"];
let ages = [15, 16, 14];

console.log(`${names[0]} is ${ages[0]} years old`)
console.log(`${names[1]} is ${ages[1]} years old`)
console.log(`${names[2]} is ${ages[2]} years old`)