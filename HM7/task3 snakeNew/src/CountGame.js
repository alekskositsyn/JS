class CountGame {
    constructor() {
        this.countGame = document.getElementById('countGame');
        this.count = 0;
    }
    /** 
     * Метод получает другие игровые объекты, которые нужны ему
     * для работы.
     * @param {Settings} settings 
     */
    init(settings) {
        this.settings = settings;
    }
    /**
     * Выводит таблицу с актуальным счётом и количеством очков необходимых для победы.
     * @param {string} 
     */
    renderCount() {
        this.countGame.innerHTML = `<tr><td>${this.count}</td><td>/</td><td>${this.settings.winLength}</td></tr>`;
        }
    
    /**
     * Метод прибавляет 1 к счётчику, когда змея съедает еду.
     * @return {Number} и возвращает число.
     */
    changeCount() {
        return this.count++;
    }
}