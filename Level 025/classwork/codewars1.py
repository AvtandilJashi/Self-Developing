#Is it a palindrome?

def is_palindrome(s):
    x = s.lower()
    
    if x == x[::-1]:
        return True
    else:
        return False
    


