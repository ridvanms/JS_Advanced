function tickTackoe(arrWithCordinates) {
    //player ` X ` is first
    const board = [['false', 'false', 'false'], ['false', 'false', 'false'], ['false', 'false', 'false']]
    let player = 'X'
    for (let i = 0; i < arrWithCordinates.length; i++) {
        // keeping look for already taken spot
        let [row, col] = arrWithCordinates[i].split(' ')
        while (board[row][col] !== 'false') {
            console.log("This place is already taken. Please choose another!")
            i++
            [row, col] = arrWithCordinates[i].split(' ')
        }
        board[row][col] = `${player}`


        //if free spaces end and there is no winner
        if (!board.flatMap(el => el).find(el => el === 'false')) {
            console.log("The game ended! Nobody wins :(")
            break;
        }

        //checking if player win

        //checking diagonals
        if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
            console.log(`Player ${player} wins!`)
            break;
        } else if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
            console.log(`Player ${player} wins!`)
            break;
        }
        //checking rows
        if (board[0][0] === player && board[0][1] === player && board[0][2] === player) {
            console.log(`Player ${player} wins!`)
            break;
        } else if (board[1][0] === player && board[1][1] === player && board[1][2] === player) {
            console.log(`Player ${player} wins!`)
            break;
        } else if (board[2][0] === player && board[2][1] === player && board[2][2] === player) {
            console.log(`Player ${player} wins!`)
            break;
        }

        //cheking columns
        if (board[0][0] === player && board[1][0] === player && board[2][0] === player) {
            console.log(`Player ${player} wins!`)
            break;
        } else if (board[0][1] === player && board[1][1] === player && board[2][1] === player) {
            console.log(`Player ${player} wins!`)
            break;
        } else if (board[0][2] === player && board[1][2] === player && board[2][2] === player) {
            console.log(`Player ${player} wins!`)
            break;
        }

        //changing players 
        if (player === 'X') player = 'O'
        else player = 'X'
    }
    console.log(board.map(el => el.join('\t')).join('\n'));

}

tickTackoe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"]);

// Player O wins!
// O	X	X
// X	O	X
// O	false	O
console.log('-----------');
tickTackoe(["0 0",
    "0 0",
    "1 1",
    "0 1",
    "1 2",
    "0 2",
    "2 2",
    "1 2",
    "2 2",
    "2 1"])
// This place is already taken.Please choose another!
// Player X wins!
// X	X	X
// false	O	O
// false	false	false