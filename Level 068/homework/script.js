// Homework 1

function longestWord(word1, word2, word3) {
    if (word1.length > word2.length && word1.length > word3.length) {
        return word1
    }

    else if (word2.length > word1.length && word2.length > word3.length) {
        return word2
    }

    else {
        return word3
    }
}

console.log(longestWord("cat", "elephant", "dog"))



// Homework 2

function salaryWithBonus(salary, bonusPercent = 10) {
    return salary + bonusPercent
}

console.log(salaryWithBonus(1000))



// Homework 3

function examResult(score) {
    return score >= 90 ? 'Excellent' : score > 75 && score <= 89 ? 'Good' : score > 50 && score <= 74 ? 'Pass' : 'Failed'
}

console.log(examResult(88))



// Homework 4

function compareNumbers(a, b) {
    return a > b ? 'a is greater' : b > a ? 'b is greater' : 'equal'
}

console.log(compareNumbers(13, 9))



// Homework 5

function checkText(text) {
    return text.startsWith('admin') ? 'Access Granted' : 'Access Denied'
}

console.log(checkText('adminrg'))



// Homework 6

function getPrice(price, discount = 0) {
    if (discount > 0) {
        return price - discount
    }

    else {
        return price
    }
}

console.log(getPrice(139))



// Homework 7

function validatePassword(password) {
    return password.length >= 8 && password === password.toUpperCase() ? 'Valid' : 'Invalid'
}

console.log(validatePassword('bhshbcibcidb888'))



// Homework 8

function login(username = "", password = "") {
    return username === 'admin' && password === '1234' ? 'Welcome Admin' : 'Wrong Credentials'
}

console.log(login('jashi', '9999'))



// Homework 9

function studentStatus(name, score) {
    return score > 50 ? 'Passed' : 'Failed'
}

console.log(studentStatus('Goga', 99))



// Homework 10

function bankAccount(balance, action = "deposit", amount = 0) {
    return action === 'deposit' ? balance += amount : action === 'withdraw' ? balance -= amount : 'Insufficient Funds'
}

console.log(bankAccount(1390, 'deposit', 50))