#Reversed sequence

def reverse_seq(n):
    new = []
    
    for i in range(1, n + 1):
        new.append(i)
    
    
    return new[::-1]