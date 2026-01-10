#Vowel Count

def get_count(str):
    sum = 0
    vow = 'aeiouAEIOU'
  
    for i in str:
        if i in vow:
            sum += 1
      
    return sum

