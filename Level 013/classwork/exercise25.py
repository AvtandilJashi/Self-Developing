# შექმენი ცვლადი სადაც შეინახავ სტადამიანების სახელებს(6 ცალი) სიას-->შემდეგ შეამოწმეთ --> თუ ამ სიაში მესამე ინდექსზე მდგომი ელემენტი არის "lasha" -->დაუპრინტე --> "You choose lasha" , თუ სიაში მყოფი ბოლო ინდექსზე მდგომი ელემენტი არის "giorgi" მაშინ დაუპრინტე -->"you choose giorgi" , სხვა შემთხვევაში დაუპრინტე --> "you choose other name"

names = ["giorgi" , "saba" , "irma" , "kote" , "avtandili" , "goga"] 

if names[3] == 'lasha':
    print('you choose lasha')
elif names[-1] == 'giorgi':
    print('you choose giorgi')
else:
    print('you choose other name')

