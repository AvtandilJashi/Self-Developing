// Homework 1

let trips = [
    { city: "Paris", days: 5, price: 1200, available: true },
    { city: "Rome", days: 3, price: 800, available: true },
    { city: "Tokyo", days: 10, price: 2500, available: false },
    { city: "Dubai", days: 4, price: 900, available: true },
    { city: "London", days: 6, price: 1500, available: false }
];

let filteredTrips = trips.filter((item) => item.price < 1000)
console.log(filteredTrips)

let mappedTrips = filteredTrips.map((item) => {
    return {
        city: item.city,
        days: item.days,
        price: item.price,
        type: item.days <= 4 ? 'short trip' : item.days > 5 ? 'long trip' : null,
    }
})

console.log(mappedTrips)

mappedTrips.forEach((item) => {
    console.log(`${item.city} - ${item.days} - ${item.price} - ${item.type}`)
})



// Homework 2

let movies = [
    { title: "Inception", rating: 8.8, year: 2010 },
    { title: "Avatar", rating: 7.8, year: 2009 },
    { title: "Interstellar", rating: 8.7, year: 2014 },
    { title: "Titanic", rating: 7.9, year: 1997 },
    { title: "Gladiator", rating: 8.5, year: 2000 }
];

let filteredMovies = movies.filter((item) => item.rating >= 8.5 && item.year >= 2000)
console.log(filteredMovies)

let mappedMovies = filteredMovies.map((item) => {
    return {
        title: item.title,
        rating: item.rating,
        category: item.rating >= 8.7 ? 'masterpiece' : 'great',
    }
})

console.log(mappedMovies)

mappedMovies.forEach((item) => console.log(`${item.title} - ${item.rating} - ${item.category}`))



// Homework 3

let players = [
    { name: "Messi", goals: 30, assists: 12, age: 36 },
    { name: "Haaland", goals: 35, assists: 7, age: 24 },
    { name: "Saka", goals: 18, assists: 14, age: 23 },
    { name: "Mbappe", goals: 28, assists: 10, age: 26 },
    { name: "Foden", goals: 15, assists: 11, age: 24 }
];

let filtereredPlayers = players.filter((item) => item.goals >= 20 && item.assists >= 10)
console.log(filtereredPlayers)

let mappedPlayers = players.map((item) => {
    return {
        name: item.name,
        goals: item.goals,
        assists: item.assists,
        total: item.goals + item.assists
    }
})

console.log(mappedPlayers)

mappedPlayers.forEach((item) => console.log(`${item.name} - Goals: ${item.goals} - Assists: ${item.assists} - Total: ${item.total}`))



// Homework 4

let weather = [
    { city: "Tbilisi", temperature: 28, rainy: false },
    { city: "Batumi", temperature: 22, rainy: true },
    { city: "Kutaisi", temperature: 26, rainy: false },
    { city: "Gudauri", temperature: 5, rainy: true }
];

let filteredWeather = weather.filter((item) => item.rainy === false && item.temperature > 20)
console.log(filteredWeather)

let mappedWeather = filteredWeather.map((item) => {
    return {
        city: item.city,
        temperature: item.temperature,
        weather: item.temperature >= 25 ? 'hot' : item.temperature >= 20 ? 'warm' : null,
    }
})

console.log(mappedWeather)

mappedWeather.forEach((item) => console.log(`${item.city} - ${item.temperature} - ${item.weather}`))



// Homework 5

let car = {
    brand: "BMW",
    model: "M5",
    year: 2024,
    engine: "4.4L",
    color: "Black"
};

for (let i in car) {
    if (i === 'year') {
        console.log(`Car was produced in ${car.year}`)
    }

    console.log(`${i} ---> ${car[i]}`)
}



// Homework 6

let account = {
    owner: "Nika",
    balance: 2500,

    deposit: function (amount) {
        this.balance += amount
    },

    withdraw: function (amount) {
        this.balance -= amount
    },

    showBalance: function () {
        console.log(`$${this.balance}`)
    }
};

account.deposit(300)
account.withdraw(100)
account.showBalance()



// Homework 7

let team = {
    name: "Dream Team",

    coach: {
        name: "Giorgi",
        experience: 10
    },

    stadium: {
        name: "Arena",
        capacity: 50000
    },

    showInfo: function () {
        console.log(`Team: ${this.name}`)
        console.log(`Coach: ${this.coach.name}`)
        console.log(`Experience: ${this.coach.experience}`)
        console.log(`Stadium: ${this.stadium.name}`)
        console.log(`Capacity: ${this.stadium.capacity}`)
    }
};

team.showInfo()



// Homework 8

let game = {
    player: "Nika",

    stats: {
        kills: 15,
        deaths: 4,
        assists: 12,
        wins: 8
    },

    showStats: function () {
        for (let i in this.stats) {
            console.log(`${i}: ${this.stats[i]}`)
        }
    }
};

game.showStats()



// Homework 9

let playlist = {
    name: "My Playlist",

    songs: {
        "Blinding Lights": 3,
        "Believer": 4,
        "Shape of You": 4,
        "Numb": 3
    },

    getTotalTime: function () {
        let sum = 0

        for (let i in this.songs) {
            sum += this.songs[i]
        }

        console.log(sum)
    }
};

playlist.getTotalTime()



// Homework 10

let cafe = {
    name: "Coffee House",

    menu: {
        coffee: 5,
        tea: 3,
        cake: 7,
        sandwich: 10
    },

    showMenu: function () {
        for (let i in this.menu) {
            console.log(i, this.menu[i])
        }
    },

    getAveragePrice: function () {
        let allPrice = 0
        let count = 0

        for (let i in this.menu) {
            allPrice += this.menu[i]
            count += 1
        }

        console.log(allPrice / count)
    }
};

cafe.showMenu()
cafe.getAveragePrice()