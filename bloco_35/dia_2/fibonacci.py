def fibonacci(position):
    previous_number = 0
    current_number = 1
    next_number = 0
    sequence = []
    for _ in range(position):
        sequence.append(previous_number)
        next_number = previous_number + current_number
        previous_number = current_number
        current_number = next_number
    return sequence[position]


def fibonacci_iter(n):
    sequence = [0, 1]
    if n >= 2:
        for x in range(2, n+1):
            next = sequence[-1] + sequence[-2]
            sequence.append(next)
    return sequence[n]


def recursive_fibonacci(n):
    if n < 2:
        return n
    else:
        return recursive_fibonacci(n-1) + recursive_fibonacci(n-2)


result = recursive_fibonacci(10)
print(result)
