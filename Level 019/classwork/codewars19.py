#Calculate average

def find_average(numbers):
    sum = 0
    
    if numbers == []:
        return 0
    
    for i in numbers:
        sum += i
    return sum / len(numbers)


