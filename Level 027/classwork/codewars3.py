#Disemvowel Trolls

def disemvowel(string_):
    string = ''
    vowels = 'aeiouAEIOU'

    for i in string_:
        if i not in vowels:
            string += i
    
    return string

        