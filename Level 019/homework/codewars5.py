#Remove exclamation marks

def remove_exclamation_marks(s):
    array = ''
    
    for i in s:
        if i != '!':
            array += i
    return array
            

