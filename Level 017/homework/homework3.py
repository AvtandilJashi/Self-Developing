def guess(num):
    if num > 0:
        return 'positive'
    elif num < 0:
        return 'negative'
    else:
        return 'zero'
    
print(guess(13))
print(guess(-9))
print(guess(0))