#Homework 1

days = ['Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday']\

days[0] = 'tommorow'
days[-1] = 'Yesterday'

print(days)



#Homework 2

colors = ['red' , 'green' , 'blue' , 'yellow' , 'black']

colors[-3] = 'white'
colors[-1] = 'Orange'

print(colors)



#Homework 3

fruits = ['apple' , 'banana' , 'cherry' , 'orange' , 'melon']

fruits[0] = 'grape'
fruits[-2] = 'Potato'

print(fruits)



#Homework 4

cities = ['Tbilisi' , 'Kutaisi' , 'Batumi' , 'Rustavi' , 'Zugdidi']

cities[1] = 'Rustavi'
cities[-2] = 'Kutaisi'

print(cities)



# #Homework 5

cars = ['Bentley' , 'Mercedes' , 'Ferrari' , 'Buggati' , 'BMW']

#for loop
for i in range(5):
    print(cars[i])

#while loop
num = 0

while num < 5:
    print(cars[num])
    num += 1



#Homework 6

name = 'goga'

#for loop
for i in range(4):
    print(name[i])

#while loop
num = 0

while num < 4:
    print(name[num])
    num += 1



#Homework 7

#immutable -- არის ისეთი სტრინი რომელსაც ვერ შეცვლი
#mutable -- არის ისეთი სიები რომლებიც იცვლებიან



#Homework 8

numbers = [2 , 4 , 6 , 7 , 220]

#for loop
for i in range(5):
    if numbers[i] % 2 == 0:
        print(numbers[i])

#while loop
num = 0

while num < 5:
    if numbers[num] % 2 == 0:
        print(numbers[num])
    num += 1



#Homework 9

string = ['avto' , 'goga' , 'avoieo' , 'zauri']

for i in range(4):
    if string[i][0] == 'a' and string[i][-1] == 'o':
        print(string[i])



#Homework 10

list = [5 , 6 , 9 , 99 , 232322 , 454 , 67 , 69]

for i in range(8):
    if list[i] % 5 == 0 and list[i] % 3 == 0:
        print(list[i])



#Homework 11

#იგივე იყო რაც Homework 10.