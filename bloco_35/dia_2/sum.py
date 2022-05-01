def sum(number):
    if number < 1:
        return number
    return sum(number - 1) + number

result = sum(5)
print(result)
