window.addEventListener('load', () => {
    const status = new Status();
    const board = new Board();
    const game = new Game();
    
    board.init(game);
    game.init(status, board);

    board.renderMap();

    game.run();
});