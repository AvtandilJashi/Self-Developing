#V A P O R C O D E

def vaporcode(string):
    list = []
    for i in string:

        if i != ' ':

          list.append(i.upper())

    return '  '.join(list)

