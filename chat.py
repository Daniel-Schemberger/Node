import os


player = {'x': 0, 'y':0}

def mov(comando):
    if comando == 'a':
        player['x'] -= 1
    elif comando == 'd':
        player['x'] += 1
    elif comando == 'w':
        player['y'] -= 1
    elif comando == 's':
        player['y'] += 1

while True:
        os.system('cls')

        print('------------------')

        for y in range(5):
            print('\n')

            for x in range(10):
                if player['x'] == x and player['y'] == y:
                    print('X', end='')
                else:
                    print('.', end='')
        print('------------------')

        direçao = input('Próxima direção: ')
        mov(direçao)


