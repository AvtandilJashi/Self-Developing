#altERnaTIng cAsE <=> ALTerNAtiNG CaSe

def to_alternating_case(string):
    str = ""
    
    for i in string:
        if i == i.lower():
            str += i.upper()
        elif i == i.upper():
            str += i.lower()
        else:
            str += i
            
    return str