def remove_num(list):
    new = []
    for i in list:
        if i > 5:
            new.append(i)
    return new


print(remove_num([1, 2, 3, 55, 77, 8, 9]))