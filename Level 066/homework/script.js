// Homework 1

let age = Number(prompt('Enter your age: '))

age >= 18 ? console.log('შეგიძლია ხმის მიცემა') : console.log('ჯერ ვერა')



// Homework 2

let num = Number(prompt('Enter number: '))

num % 2 == 0 ? console.log('even') : console.log('odd')



// Homework 3

let password = prompt('Enter your password: ')

password.length >= 8 ? console.log('ძლიერი პაროლი') : console.log('სუსტი პაროლი')



// Homework 4

let user = prompt('Enter smth: ')

user.trim() === 'admin' ? console.log('Yes it is') : console.log('No it is not')



// Homework 5

let num1 = 139

num1 > 0 ? console.log('დადებითი') : num1 < 0 ? console.log('უარყოფითია') : console.log('ნულია')



// Homework 6

let name = prompt('Enter name 1: ')
let name1 = prompt('Enter name 2: ')

name.length > name1.length ? console.log(name) : console.log(name1)



// Homework 7

let num2 = Number(prompt('Enter number 1: '))
let num3 = Number(prompt('Enter number 2:'))

num2 > num3 ? console.log('პირველი დიდია') : console.log('მეორე ტოლია ან დიდია')



// Homework 8

let data = '25'

typeof(data) === 'string' ? console.log('სტრინგია') : console.log('სტრინგი არაა')



// Homework 9

let role = prompt("შეიყვანე როლი: ").trim().toLowerCase();

role === 'admin' ? console.log('სრული წვდომა') : role === 'moderator' ? console.log('შეზღუდული წვდომა') : console.log('მომხმარებელი')



// Homework 10

let score = 99

score >= 90 ? console.log('A') : score >= 80 ? console.log('B') : score >= 70 ? console.log('C') : score >= 60 ? console.log('D') : console.log('F')



// Homework 11

let monthnum = 9

switch (monthnum) {
    case 1:
        console.log('winter')
        break
    case 2:
        console.log('winter')
        break
    case 3:
        console.log('spring')
        break
    case 4:
        console.log('spring')
        break
    case 5:
        console.log('spring')
        break
    case 6:
        console.log('summer')
        break
    case 7:
        console.log('summer')
        break
    case 8:
        console.log('summer')
        break
    case 9:
        console.log('autumn')
        break
    case 10:
        console.log('autumn')
        break
    case 11:
        console.log('autumn')
        break
    case 12:
        console.log('winter')
        break
    default: 
        console.log('goga forget to write it')
        break
}



// Homework 12

let color = prompt('Enter color, red/yellow/green: ').toLowerCase()

switch (color) {
    case 'red':
        console.log('გაჩერდი')
        break
    case 'yellow':
        console.log('მოემზადე')
        break
    case 'green':
        console.log('იარე')
        break
    default: 
        console.log('კიდე დაავიწყდა გოგას')
        break
}



// Homework 13

let animal = prompt('Enter animal, dog/cat/cow/sheep: ').toLowerCase()

switch (animal) {
    case 'dog':
        console.log('vafvaf')
        break
    case 'cat':
        console.log('miawwww')
        break
    case 'cow': 
        console.log('muuuuuuuuuuuuuuuuuu')
        break
    case 'sheep': 
        console.log('meeeeeeeeee')
        break
    default: 
        console.log('კიდე დაავიწყდა გოგას')
        break
}



// Homework 14

let symbol = prompt('Enter symbol, A/B/C/D/F: ').toUpperCase()

switch (symbol) {
    case 'A':
        console.log('შესანიშნავი')
        break
    case 'B':
        console.log('ძალიან კარგი')
        break
    case 'C':
        console.log('კარგი')
        break
    case 'D':
        console.log('დამაკმაყოფილებელი')
        break
    case 'F':
        console.log('ჩაჭრილი')
        break
    default:
        console.log('კიდე დაავიწყდა გოგას')
        break
}



// Homework 15

let browser = prompt('Enter browser, chrome/firefox/edge/safari: ').toLowerCase()

switch (browser) {
    case 'chrome':
        console.log('Google-ის მიერ შექმნილი ბრაუზერი. გამოირჩევა მაღალი სიჩქარით, მარტივი ინტერფეისით და უამრავი გაფართოებით (Extensions)')
        break
    case 'firefox':
        console.log('Mozilla Firefox-ის ბრაუზერი. ცნობილია კონფიდენციალურობის დაცვის ფუნქციებითა და ღია კოდის (Open Source) ბუნებით.')
        break
    case 'edge':
        console.log('Microsoft Edge არის Microsoft-ის ბრაუზერი. მუშაობს Chromium ძრავაზე, სწრაფია და კარგადაა ინტეგრირებული Windows-თან.')
        break
    case 'safari':
        console.log('Safari არის Apple-ის ბრაუზერი. ოპტიმიზებულია Mac, iPhone და iPad მოწყობილობებისთვის, გამოირჩევა ენერგოეფექტურობითა და უსაფრთხოებით.')
        break
    default:
        console.log('კიდე დაავიწყდა გოგას')
        break
}       



// Homework 16

let role1 = prompt('Enter role, admin/moderator/user/guest: ').toLowerCase()

switch (role1) {
    case 'admin':
        console.log('აქვს სრული კონტროლი სისტემაზე. შეუძლია მომხმარებლების დამატება/წაშლა, პარამეტრების შეცვლა, როლების მართვა და ყველა მონაცემზე წვდომა.')
        break
    case 'moderator':
        console.log('აკონტროლებს კონტენტს და მომხმარებლების ქცევას. შეუძლია პოსტების, კომენტარების ან მომხმარებლების მართვა, მაგრამ ჩვეულებრივ არ აქვს სისტემის სრული ადმინისტრაციული უფლებები.')
        break
    case 'user':
        console.log('სისტემის ჩვეულებრივი მომხმარებელია. შეუძლია საკუთარი ანგარიშის გამოყენება, ინფორმაციის ნახვა და იმ ფუნქციების შესრულება, რომლებიც მისთვისაა დაშვებული.')
        break
    case 'guest':
        console.log('არარეგისტრირებული ან შეზღუდული წვდომის მქონე მომხმარებელი. ჩვეულებრივ შეუძლია მხოლოდ გარკვეული ინფორმაციის დათვალიერება და არ შეუძლია მნიშვნელოვანი მოქმედებების შესრულება.')
        break
    default:
        console.log('კიდე დაავიწყდა გოგას')
        break
}