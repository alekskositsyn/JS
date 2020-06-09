'use strict';

let app = {
    config: {
        rows: [ 8, 7, 6, 5, 4, 3, 2, 1],
        cols: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
    },

    run() {
        let board = this.generateBoard();
        document.body.innerHTML = board;
        this.insertRowNumbers();
        this.insertColChars();
    },

    generateBoard() {
        let board = '';
        let rowStartColor = "white";
        for (let i = 0; i < this.config.rows.length; i++) {
            let row = '';
            if (rowStartColor == 'white') {
                row = this.generateRow(rowStartColor, this.config.rows[i]);
                rowStartColor = 'black';
            } else {
                row = this.generateRow(rowStartColor, this.config.rows[i]);
                rowStartColor = 'white';
            }
            board += row;
        }
        return `<table><tbody>${board}</tbody></table>`;
    },

    generateRow(startWithColor, rowNum) {
        let currentColorClass = startWithColor;
        let row = '';
        for (let i = 0; i < this.config.cols.length; i++) {
            let field = '';
            if (currentColorClass == 'white') {
                field = this.generateField('white', rowNum, this.config.cols[i]);
                currentColorClass = 'blackField';
            } else {
                field = this.generateField('black', rowNum, this.config.cols[i]);
                currentColorClass = 'white';
            }
            row += field
        }
        return `<tr>${row}</tr>`
    },
    generateField(color, rowNum, colChar) {
        return `<td data-rownum="${rowNum}" data-colchar="${colChar}" class="${color}"></td>`;
    },

    insertRowNumbers() {
        let trs = document.querySelectorAll('tr');
        for (let i = 0; i < trs.length; i++) {
            let td = document.createElement('td');
            td.innerText = this.config.rows[i];
            trs[i].insertAdjacentElement("afterbegin",td);

        }
    },
    insertColChars() {
        let tr = document.createElement('tr');
        tr.innerHTML += '<td></td>';
        for (let i = 0; i < this.config.cols.length; i++) {
            tr.innerHTML += `<td>${this.config.cols[i]}</td>`;
            
        }
        let tbody = document.querySelector('tbody');
        tbody.insertAdjacentElement("beforeend", tr);
    },
};

app.run();