#If you can't sleep, just count sheep!!

def count_sheep(n):
    array = ''
    
    for i in range(1, n + 1):
        array += f'{i} sheep...'
        
    return array

