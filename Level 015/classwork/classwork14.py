names = ['mari', 'avto', 'goga', 'cici', 'iago', 'vato', 'manana']

clear = []

for i in names:
    if i.count('a') > 2:
        clear.append(i)

print(clear)