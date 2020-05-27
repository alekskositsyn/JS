let game = {
    /**
     * Запускает игру.
     */
    run() {
        // Бесконечный цикл
        while (true) {

            // Получаем номер вопроса.
            const numQuestion = questions.getNumOfQuestion(5);
            if (numQuestion === null) {
                console.log('Вы ответили на все вопросы. Для выхода нажмите "OK"');
            }
            // Задаем вопрос.
            const question = questions.getQuestion(numQuestion);
           
            // Получаем ответ от игрока.
            const answer = answers.getAnswer();
            //Проверяем правильность ответов.
            const rightAnswer = questions.doCheck(answer,numQuestion);

            if (rightAnswer) {
                player.getPoints();
            }

            // Если игрок сказал что хочет выйти, то игра заканчивается.
            if (answer === null || numQuestion === null) {
                console.log("Игра окончена.");
                console.log("Вы набрали: " + player.points + " очков");
                return;
            }

            renderer.clear();

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