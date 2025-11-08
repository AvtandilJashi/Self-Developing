#შექმენი სია სადაც შეინახავ სტრინგებს(ადამიანის სახელებს,რაც გინდათ და რამდენიც გინდათ),შემდეგ შეადარეთ თუ ამ სიაში მყოფი მე0 ინდექსზე მდგომი ელემენტი არის 'luka' ან(or) არის "saba" დაუპრინტე -->You choose luka or saba, თუ ამ სიაში მყოფი ბოლო ინდექსზე მყოფი ელემენტი არის "irma" ან(or) "iamze" მაშინ დაუპრინტე --> You choose irma or iamze,სხვა შემთხვევაში დაუპტინტე --> You choose other name

names = ["giorgi" , "saba" , "irma" , "kote" , "avtandili" , "goga"] 

if names[0] == 'luka' or names[0] == 'saba':
    print('you choose luka or saba')
elif names[-1] == 'irma' or names[-1] == 'iamze':
    print('You choose irma or iamze')
else:
    print('you choose other name')