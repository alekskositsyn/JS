let questions = {
    // Список с заданными номерами вопросов.
    requested: [],
    /**
     *Возвращает номер вопроса, проверяя его на повтор.
     *
     * @param {integer} max Количество вопросов, которые будут заданы.
     * @returns {integer} Номер вопроса.
     */
    getNumOfQuestion(max) {
        while (true) {
            numOfQuestion = Math.floor(Math.random() * Math.floor(max));
            if (this.requested.length === max) {
                return null;
            }
            if (this.requested.includes(numOfQuestion)) {
                continue;
            }
            this.requested.push(numOfQuestion);
            return numOfQuestion;
        }
    },

    /**
     * Задаёт вопрос пользователю.
     * @returns {string} Возвращаем вопрос, варианты ответов.
     */
    getQuestion(x) {
        let question = {
            0: 'В каком году закончилась Вторая мировая война?\nВарианты ответов:\n 1. 1939\n 2. 1812\n 3. 1945\n 4. 1941',
            1: 'Столица России?\nВарианты ответов:\n 1. Москва\n 2. Санкт-Питербург\n 3. Владивосток\n 4. Новосибирск',
            2: 'Год крящения Руси?\nВарианты ответов:\n 1. 988\n 2. 1202\n 3. 1724\n 4. 899',
            3: 'Продолжите название советского фильма,-"В бой идут одни ..."?\nВарианты ответов:\n 1. Рыбаки\n 2. Старики\n 3. Мужики\n 4. Дохляки',
            4: 'Российский космонавт?\nВарианты ответов:\n 1. Пугачёв\n 2. Терешков\n 3. Гагарин\n 4. Королёв',
        };
        console.log(question[x]);
    },
    doCheck(answer,numOfQuestion) {
        let rightAnswers = {
            0: 3,
            1: 1,
            2: 1,
            3: 2,
            4: 3
        }
        if (answer === rightAnswers[numOfQuestion]) {
            return true;
        }
        return false;
    }
};