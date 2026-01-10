#Twice as old

def twice_as_old(dad, son):
    age = son * 2 - dad
    
    if age < 0:
        return age * -1
    else:
        return age