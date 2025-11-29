def user(name):
    count = 0

    for i in name:
        if i[0] == 'გ':
            count += 1
    return count

print(user(['gela', 'giorgi,' 'sandro']))
