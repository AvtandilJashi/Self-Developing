def length_str(word):
    new = []

    for i in word:
        if len(i) > 4:
            new.append(i)
            
    return new


print(length_str(['gela', 'nikolozi', 'goga', 'levani']))