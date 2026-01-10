#How good are you really?

def better_than_average(class_points, your_points):
    sum = 0
    
    for i in class_points:
        sum += i
    
    average = sum // len(class_points)
    
    if average < your_points:
        return True
    else:
        return False

