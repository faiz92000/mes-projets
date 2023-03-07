import matplotlib.pyplot as plt
import matplotlib.cm as cm
import numpy as np
board = [' ' for x in range(9)]


def draw_board(board):
    print('-------------')
    print('| ' + board[0] + ' | ' + board[1] + ' | ' + board[2] + ' |')
    print('-------------')
    print('| ' + board[3] + ' | ' + board[4] + ' | ' + board[5] + ' |')
    print('-------------')
    print('| ' + board[6] + ' | ' + board[7] + ' | ' + board[8] + ' |')
    print('-------------')


def check_win(board, player):
    win_conditions = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]
    for condition in win_conditions:
        if board[condition[0]] == player and board[condition[1]] == player and board[condition[2]] == player:
            return True
    return False


def play_game():
    print('Jeu de Morpion')
    player1 = input('Joueur 1, entrez votre nom: ')
    player2 = input('Joueur 2, entrez votre nom: ')
    current_player = player1
    draw_board(board)
    while True:
        move = int(input(current_player + ', entrez votre mouvement (1-9): ')) - 1
        if board[move] == ' ':
            board[move] = 'X' if current_player == player1 else 'O'
            draw_board(board)
            if check_win(board, board[move]):
                print(current_player + ' a gagné!')
                return
            if ' ' not in board:
                print('Match nul!')
                return
            current_player = player2 if current_player == player1 else player1
        else:
            print('Position déjà occupée. Veuillez réessayer.')


play_game()
