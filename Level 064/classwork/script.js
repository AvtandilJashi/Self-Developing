// Classwork 1

let name = prompt('Enter your name: ')

if (name && name == name.toUpperCase()) {
    console.log('upper word')
}

else if (name && name == name.toLowerCase()) {
    console.log('lowered word')
}

else if (name.startWith('ბ') && name.length > 7) {
    console.log('correct word')
}

else {
    console.log('incorrect name')
}