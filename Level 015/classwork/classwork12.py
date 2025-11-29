numbers = ['9', 13, '99', 23, '133', 15]

for i in numbers:
    if type(i) == int and i % 3 == 0 and i % 5 == 0:
        numbers.pop()

print(numbers)


        





