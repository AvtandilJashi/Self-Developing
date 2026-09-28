// Homework 1

let student = {
    name: 'avto',
    age: 15,
    city: 'tbilisi',
    grade: 100
}

console.log(student.name, student.city)

student.school = 'freedom school'
delete student.city

console.log(student)



// Homework 2

let product = {
    name: "Laptop",
    price: 2500,
    category: "Electronics",
    stock: 5
}

console.log(product.name)

product.price = 2200
product.brand = 'Lenovo'
product.stock += 10

console.log(product["category"])



// Homework 3

let calculator = {
    number1: 19,
    number2: 39,
    add() {
        console.log(this.number1 + this.number2)
    },
    subtract() {
        console.log(this.number1 - this.number2)
    },
    multiply() {
        console.log(this.number1 * this.number2)
    }
}

calculator.add()
calculator.subtract()
calculator.multiply()



// Homework 4

const user = {
    name: "Goga",
    age: 20,
    address: {
        city: "Tbilisi",
        street: "Rustaveli",
        number: 10
    }
};

console.log(user.name)
console.log(user.address.city)

user.address.city = 'Batumi'
user.address.street = 'Chavchavadze'
user.address.country = 'Georgia'



// Homework 5

const user1 = {
    username: "goga123",
    age: 20,
    email: "goga@gmail.com",
    address: {
        city: "Tbilisi",
        street: "Chavchavadze"
    }
};

user1.username = 'jashi88'
user1.address.city = 'ozurgeti'
user1.phone = 123456789
user1.address.zipCode = 2345
delete user1.email

console.log(user1)



// Homework 6

const player = {
    name: "Warrior",
    level: 10,
    health: 100,
    weapon: {
        name: "Sword",
        damage: 30
    },
    showInfo() {
        console.log(player.name, player.level, player.weapon.name)
    }
};

player.health = 90
player.weapon.damage = 70
player.weapon.type = 'magical'

player.showInfo()



// Homework 7

const player1 = {
    name: "Goga",
    level: 10,
    health: 100
};

function changePlayer(player1) {
    player1.level = 20
    player1.health = 150
}

changePlayer(player1)
console.log(player1)



// Homework 8

const student1 = {
    name: "Nika",
    age: 18,
    grade: 9,
    school: {
        name: "School 1",
        city: "Tbilisi"
    }
};


function updateStudent(student1) {
    student1.grade += 1
    student1.school.city = 'ozurgeti'
    student1.status = 'active'
    student1.age = 16
}

updateStudent(student1)
console.log(student1)



// Homework 9

const gameCharacter = {
    name: "Knight",
    level: 15,
    health: 100,
    weapon: {
        name: "Sword",
        damage: 40
    },
    stats: {
        strength: 20,
        speed: 10
    }
};

function levelUp(character) {
    character.level += 1
    character.health += 20
    character.strength += 5
}

function changeWeapon(character) {
    character.weapon.name = 'Katana'
    character.weapon.damage = 150
}

gameCharacter.levelUp(gameCharacter)
gameCharacter.weapon(gameCharacter)

console.log(gameCharacter)



// Homework 10

let user2 = {
    name: 'goga',
    age: 18,
    city: 'Tbilisi',
    introduce() {
        console.log(`My name is ${this.name}.  I am ${this.age} years old. I live in ${this.city}.`)
    }
}

user2.introduce()



// Homework 11

const player = {
    name: "Warrior",
    health: 100,
    takeDamage() {
        this.health -= 20
    }
};

player.takeDamage();
console.log(player.health);



// Homework 12

const student = {
    name: "Nika",
    age: 17,
    address: {
        city: "Tbilisi",
        street: "Rustaveli"
    },
    showAddress() {
        console.log(student.address)
    }
};

character3.showAddress()



// Homework 13

const product = {
    name: "Laptop",
    price: 2500,
    category: "Electronics",
    showProduct() {
        console.log(this.name, this.price)
    }
};

let user4 = input('Choose Product: ')
console.log(product[user4])



// Homework 14

const character3 = {
    name: "Knight",
    level: 10,
    health: 100,
    weapon: {
        name: "Sword",
        damage: 30
    },
    levelUp() {
        character3.level += 1
        character3.health += 20
    },
    attack() {
        console.log(`${character3.name} attacks with ${character3.weapon.name} and deals ${character3.weapon.damage} damage.`)
    }
};

character3.attack()
character3.levelUp()
character3.attack()
character3["weapon"]["damage"] = 50