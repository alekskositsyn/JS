class CountGame {
    constructor() {
        this.countGame = document.getElementById('countGame');
        this.count = 0;
    }

    init(settings) {
        this.settings = settings;
    }

    renderCount() {
        this.countGame.innerHTML = `<tr><td>${this.count}</td><td>/</td><td>${this.settings.winLength}</td></tr>`;
        }
    
    /**
     * Метод прибавляет 1 к счётчику, когда змея съедает еду.
     *
     * @memberof CountGame
     */
    changeCount() {
        this.count++;
    }
}