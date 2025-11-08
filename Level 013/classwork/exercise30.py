# შმომხმარებელს შემოატანინე ათწილადი,შემდეგ შეადარე,თუ მომხმარებლის მიერ შემოტანილი რიცხვი არის 10 ზე მეტი და 30 ზე ნაკლები მაინ დაუპრინტე -->You entered number between 10 and 30, თუ მომხმარებლის მიერ შემოტანილი რიცხვი არის 10 ზე ნაკლები და 0 ზე მეტი მაშნ დაუპრინტე --> You choose number between 0 and 10 , თუ მომხმარებლის მიერ შემოტანილი რიცხვი არის 0 ზე ნაკლები მაშინ დაუპრინტე you choose negative number , სხვა შემთხვევაში დაუპრინტე -->you choose zero(0)

user = float(input('Enter float: '))

if user > 10 and user < 30:
    print('entered number between 10 and 30')
elif user < 10 and user > 0:
    print('You choose number between 0 and 10')
elif user < 0:
    print('you choose negative number')
else:
    print('you choose zero(0)')