#Convert number to reversed array of digits

def digitize(n):
    new = []
    array = str(n)
    
    for i in array:
        new.append(int(i))
    
    return new[::-1]