window.addEventListener('load', () => {
    const settings = new Settings();
    const status = new Status();
    const snake = new Snake();
    const board = new Board();
    const menu = new Menu();
    const food = new Food();
    const game = new Game();
    const countGame = new CountGame();


    countGame.init(settings);
    settings.init({ speed: 5, winLength: 20 });
    board.init(settings, snake);
    food.init(settings, snake, board);
    game.init(settings, status, board, snake, menu, food, countGame);

    countGame.renderCount();
    board.renderBoard();
    board.renderSnake();

    food.setNewFood();
    game.run();
});