#Count of positives / sum of negatives

def count_positives_sum_negatives(arr):
    sum = 0
    count = 0
    
    if arr == []:
        return []
    
    
    for i in arr:
        if i < 0:
            sum += i
        elif i > 0:
            count += 1
        
    return [count, sum]