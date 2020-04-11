
const startBoard = Game.createRandomBoard();
const game = new Game( startBoard );

console.log( game );

game.render(); // this = board

console.log(
    Game.START_BOARD.map(
        number => ({
            number,
            index: game.getIndex(number),
            canMove: game.getMoveData(number)
        })
    )
);

console.log( Game.canBoardWin([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 'empty', 15]), true );
console.log( Game.canBoardWin([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 14, 13, 'empty']), false );