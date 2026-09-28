// Classwork 1

let player = {
    name : 'avto',
    health : 87,
    gold : 12000,
    showInfo(){
        console.log(player.name, player.health, player.gold)
    },
    takeDamage(){
        player.health -= 20
    },
    earnGold(amount) {
        player.gold += amount
    }
}

player.takeDamage()
player.earnGold(3000)
player.showInfo()



// Classwork 2

const player1 = {
  name: "Goga",
  stats: {
    health: 100,
    level: 5
  }
};  

function levelUp(object) {
    object.stats.level += 1
    object.stats.health -= 20
}

levelUp(player1)
console.log(player1)