// Classwork 1

let user1 = Number(prompt('Enter number: '))

user1 > 15 ? console.log('მეტია 15-ზე') : console.log('ნაკლებია 15-ზე')



// Classwork 2

let zero = 0

zero ? console.log('truthy') : console.log('falsey')



// Classwork 3

let number = 139

number % 2 == 0 ? console.log('even') : number % 2 == 1 ? console.log('odd') : console.log('none of them')



// Classwork 4

let num = 4

switch(num) {
    case 1:
        console.log('monday')
        break
    case 2:
        console.log('tuesday')
        break
    case 3:
        console.log('wednesday')
        break
    case 4:
        console.log('thursday')
        break
    case 5:
        console.log('friday')
        break
    case 6:
        console.log('saturday')
        break
    case 7:
        console.log('sunday')
        break
    default:
        console.log('none of them')
        break
}

num === 1 ? console.log('monday') : num === 2 ? console.log('tuesday') : num === 3 ? console.log('wednesday') : num === 4 ? console.log('thursday') : num === 5 ? console.log('friday') : num === 6 ? console.log('saturday') : num === 7 ? console.log('sunday') : console.log('none of them')