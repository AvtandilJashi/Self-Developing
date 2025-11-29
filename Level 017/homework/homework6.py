def str1(list):
    for i in list:
       if 'a' in i:
           list.remove(i)
    return list


print(str1(['asdre', 'rereererererer', 'asdrexcaaa']))