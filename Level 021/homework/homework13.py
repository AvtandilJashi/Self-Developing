def function(my_list):
    my_list.sort(reverse=True, key=len)

    return my_list

print(function(['python', 'html', 'css', 'javascript', 'c++', 'c#']))