def reverse_array(array):
    reversed_array = []
    length = len(array) - 1
    for counter in array:
        print(counter)
        reversed_array.append(array[length - counter])
    return reversed_array

def reverse(list):
    reversed_list = []
    for item in list:
        reversed_list.insert(0, item)
    print(reversed_list)

def recursive_reverse(list):
    if len(list) < 2:
        return list
    else:
        return recursive_reverse(list[1:]) + [list[0]]

result = recursive_reverse([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])

print(result)
