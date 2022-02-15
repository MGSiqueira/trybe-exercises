import random

random_number = random.randint(1, 10)
guess = ''

while guess != random_number:
    guess = int(input('Guess a number: '))

print('The drawed number was:', guess)
