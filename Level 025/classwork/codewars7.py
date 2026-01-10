#Total amount of points

def points(games):
    sum = 0
    
    for i in games:
        if i[0] > i[2]:
            sum += 3
        elif i[0] < i[2]:
            sum += 0
        else:
            sum +=1
            
    return sum