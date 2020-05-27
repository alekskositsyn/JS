let game = {
    /**
     * Запускает игру.
     */
    run() {
        // Бесконечный цикл
        while (true) {
            // Задаем вопрос.
            const question = questions.getQuestion();
            // Получаем ответ от игрока.
            const answer = answers.getAnswer();

            // Если игрок сказал что хочет выйти, то игра заканчивается.
            if (answer === null) {
                console.log("Игра окончена.");
                return;
            }
            
            renderer.clear();
            player.move(nextPoint);
            renderer.render();
           
        }
    },

    // Этот метод выполняется при открытии страницы.
    init() {
        console.log("Желаете поиграть в игру «Кто хочет стать миллионером?»");
        // Отображаем нашу игру.
        //renderer.render();
        console.log("Чтобы начать игру наберите game.run() и нажмите Enter.");
    }
};

game.init();