let answers = {
    /**
     * Получает и отдает направление от пользователя.
     * @returns {int} Возвращаем направление, введенное пользователем.
     */
    getAnswer() {
        // Доступные значения ввода.
        const availableAnswers = [1, 2, 3, 4];

        while (true) {
            // Получаем от пользователя ответ.
            let answer = parseInt(prompt('Ваш вариант ответа 1, 2, 3 или 4? \n Для выхода просто нажмите "Ok"'));
            if (isNaN(answer)) {
                return null;
            }
            // Если ответ не один из доступных, то сообщаем что надо ввести корректные данные
            // и начинаем новую итерацию.
            if (!availableAnswers.includes(answer)) {
                alert('Необходимо ввести цифру от 1 до 4, а потом нажать "Ок".');
                continue;
            }

            // Если пользователь ввел корректное значение - отдаем его.
            return answer;
        }
    },

    /**
     * Отдает следующую точку в которой будет находиться пользователь после движения.
     * @param {int} direction Направление движения игрока.
     * @returns {{x: int, y: int}} Следующая позиция игрока.
     */
    getNextPosition(direction) {
        // Следующая точка игрока, в самом начале в точке будут текущие координаты игрока.
        const nextPosition = {
            x: player.x,
            y: player.y,
        };
        // Старая точка игрока, в случае выхода за пределы поля, остаются неизменными.
        const lastPosition = {
            x: player.x,
            y: player.y,
        };
        // Определяем направление и обновляем местоположение игрока в зависимости от направления.
        switch (direction) {
            case 1:
                nextPosition.x--;
                nextPosition.y++;
                break;                
            case 2:
                nextPosition.y++;
                break;
            case 3:
                nextPosition.x++;
                nextPosition.y++;
                break;  
            case 4:
                nextPosition.x--;
                break;
            case 6:
                nextPosition.x++;
                break;
            case 7:
                nextPosition.x--;
                nextPosition.y--;
                break; 
            case 8:
                nextPosition.y--;
                break;
            case 9:
                nextPosition.x++;
                nextPosition.y--;
                break;
        }
        // Если пользователь вышел за пределы поля, то возвращаем старые точки.
        if (nextPosition.x < 0 || nextPosition.x > 10 ||  nextPosition.y < 0 || nextPosition.y > 10) {
            return lastPosition;
        }
        return nextPosition;
    },
};