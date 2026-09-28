// Homework 1

const player = {
  name: "Giorgi",
  level: 10,
  health: 100,
  weapon: {
    name: "Sword",
    damage: 30
  },
  stats: {
    wins: 5,
    losses: 2
  }
}

console.log(player.name)
console.log(player.weapon["damage"])

player.health = 75
player.stats.wins += 1
player.rank = "Gold"

function takeDamage(player, damage) {
  player.health -= damage
}

takeDamage(player, 20)

console.log(player)



// Homework 2

const product = {
  name: "Laptop",
  price: 1500,
  stock: 8,
  details: {
    brand: "Lenovo",
    category: "Electronics"
  }
}

function updateProduct(product) {
  product.price += 200
  product.stock -= 2
  product.details.category = "Gaming"
  product.discount = 15
}

updateProduct(product)

console.log(product)



// Homework 3

const account = {
  owner: "Goga",
  balance: 1200,
  currency: "GEL",
  information: {
    type: "personal",
    active: true
  }
}

function deposit(account, amount) {
  account.balance += amount
}

function withdraw(account, amount) {
  if (account.balance >= amount) {
    account.balance -= amount
    console.log(account.balance)
  } else {
    console.log("Insufficient balance")
  }
}

deposit(account, 500)
withdraw(account, 300)

account["currency"] = "USD"
account.information.type = "business"
account.lastTransaction = 300

console.log(account)



// Homework 4

const character = {
  name: "Knight",
  level: 10,
  health: 100,
  weapon: {
    name: "Sword",
    damage: 30
  },
  armor: {
    name: "Steel Armor",
    defense: 20
  }
}

function attack(character, enemyHealth) {
  enemyHealth -= character.weapon.damage
  return enemyHealth
}

function upgradeWeapon(character) {
  character.weapon.damage += 10
  character.weapon.name = "Great Sword"
}

let enemyHealth = 100

enemyHealth = attack(character, enemyHealth)

upgradeWeapon(character)

console.log(enemyHealth)
console.log(character)



// Homework 5

const hero = {
  name: "Knight",
  health: 100,
  mana: 50,
  weapon: {
    name: "Sword",
    damage: 25
  },
  stats: {
    wins: 0,
    losses: 0
  }
}

const enemy = {
  name: "Dragon",
  health: 150,
  attack: {
    damage: 20
  }
}

function heroAttack(hero, enemy) {
  enemy.health -= hero.weapon.damage

  if (enemy.health <= 0) {
    hero.stats.wins += 1
  }
}

function enemyAttack(enemy, hero) {
  hero.health -= enemy.attack.damage

  if (hero.health <= 0) {
    hero.stats.losses += 1
  }
}

function upgradeHero(hero) {
  hero.weapon.damage += 10
  hero.health += 20
  hero.mana += 10
}

heroAttack(hero, enemy)
enemyAttack(enemy, hero)
heroAttack(hero, enemy)

upgradeHero(hero)

heroAttack(hero, enemy)
enemyAttack(enemy, hero)

console.log(hero)
console.log(enemy)