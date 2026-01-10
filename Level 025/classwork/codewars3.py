#Find the smallest int

def find_smallest_int(arr):
    min = arr[0]
    
    for i in range(len(arr)):
        if min > arr[i]:
            min = arr[i]
        
    return min
        