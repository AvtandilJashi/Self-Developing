// Classwork 1

let names = ["giorgi" , "avtandili" , "goga" , "saba" , "irma" , "keso" , "olga" , "natia"]

names[1] = 'sandro'

names[5] = 'elene'

names[names.length - 2] = 'teona'

names.pop()

names.push('gurami')

console.log(names)



// Classwork 2

let names = ["goga" , "irakli"]
let ages = [10 , 2000]
let correct = [true , false]

let all = names.concat(ages, correct)

all.shift()

all.unshift('Tbilisi')

all.pop()

all.push('batumi')

console.log(all)
console.log(all.length)



// Classwork 3

let smth = [["he","is"],["my","best","feiend"],["i","love","him"]]
let good = smth.flat()

let joined = good.join(' ')

console.log(joined)

let stringed = joined.split(' ')

stringed[stringed.length - 1] = 'her'
stringed[0] = 'she'

console.log(stringed)
console.log(stringed.length)


