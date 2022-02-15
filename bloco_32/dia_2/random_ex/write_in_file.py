file = open('arquivo.txt', mode='w')
LINES = ['Ola\n', 'mundo\n', 'belo\n', 'do\n', 'Python\n']
file.writelines(LINES)
file.close()

file = open('arquivo.txt', mode='r')
for line in file:
    print(line)
file.close()