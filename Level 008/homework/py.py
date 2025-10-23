#Homework 1

#for loop 
for i in range(30):
    print(i)

#while loop
num = 0

while num < 30:
    print(num)
    num += 1



#Homework 2

#for loop
for i in range(50, 100):
    print(i)

#while loop
num = 50

while num < 100:
    print(num)
    num += 1



#Homework 3

#for loop
for i in range(20, 700, 3):
    print(i)

#while loop
num = 20

while num < 700:
    print(num)
    num += 3



#Homework 4

#for loop
for i in range(30):
    print('Avtandil Jashi')

#while loop
num = 0

while num < 30:
    print('Avtandil Jashi')
    num += 1



#Homework 5

user = int(input('Enter number: '))

if user > 0 and user % 2 == 0:
    print('your number is more than 0 and even')
elif user > 0 and user % 2 == 1:
    print('your number is more than 0 and odd')
else:
    print('your number is less or equal to zero')



#Homework 6

age = int(input('Enter your age: '))

if age >= 18:
    print('სრულწლოვანი ხარ')
else:
    print('არასრულწლოვანი ხარ')



#Homework 7

temperature = int(input('Enter temperature: '))

if temperature > 30:
    print('ცხელა')
elif temperature < 10:
    print('ცივა')
else:
    print('ნორმალური ამინდია')



#Homework 8

score = int(input('Enter your score: '))

if score >= 90:
    print('A')
elif score >= 80:
    print('B')
elif score >= 70:
    print('C')
else:
    print('F')



#Homework 9

password = 'ხოდა ეგრე ბიჭო'

guess = input('Enter your passsword: ')

if password == guess:
    print('შესვლა წარმატებით')
else:
    print('პაროლი არასწორია')



#Homework 10

#for loop
for i in range(50):
    if i % 2 == 0:
        print('Even', i)
    else: 
        print('Odd', i)

#while loop
num = 0

while num < 50:
    if num % 2 == 0:
        print('Even', num)
    else: 
        print('Odd', num)
    num += 1