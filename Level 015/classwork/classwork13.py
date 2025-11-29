numbers = [9, 13, 99, 23, 133, 999]

clear = []

for i in numbers:
    if numbers.index(i) % 2 == 0:
        clear.append(i)
    
sum = 0

for i in clear:
    sum += i

print(sum)

