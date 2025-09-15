let btnStart = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0];

let expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByClassName('button')[1],
    countBtn = document.getElementsByClassName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    chooseSum = document.querySelector('.choose-sum'),
    chooseProcent = document.querySelector('.choose-percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');



let money, time;


function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}
start();





let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", '');
            let b = prompt("Во сколько обойдется", '');

            if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null
                && a != '' && b != '' && a.length < 50) {
                console.log("Успешно!");
                appData.expenses[a] = b;
            } else if (a === null && b === null) {
                console.log("Вы вышли из программы!");
                break;
            } else {
                console.log("Некорректно!");
            }

        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Бюджет на 1 день составляет: " + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка!");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка!");
        } else if (appData.moneyPerDay >= 2000) {
            console.log("Высокий уровень достатка!");
        } else {
            console.log("Произошла ошибка!");
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");

            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 1; i <= 3; i++) {
            let questionOptExpenses = prompt("Статья необязательных расходах", '');
            appData.optionalExpenses[i] = questionOptExpenses;
            console.log(appData.optionalExpenses);
        }
    },
    chooseIncome: function () {
        let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        if (typeof (items) != 'string' || items == '' || typeof (items) == null) {
            console.log("Вы ввели некорректные данные или оставили строку пустой");
        } else {
            appData.income = items.split(', ');
            appData.income.push(prompt('Может что-то еще?'));
            appData.income.sort();
        }
        appData.income.forEach(function (itemmassive, i) {
            alert("Способы доп. заработка: " + (i + 1) + ' - ' + itemmassive);
        });
    }
};

for (let key in appData) {
    console.log('Наша программа включает в себя данные: ' + key + ' имеет значение ' + '-' + appData[key]);
}



// Используем цикл while
// let i = 0;
// while (i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", '');
//     let b = prompt("Во сколько обойдется", '');

//     if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null
//         && a != '' && b != '' && a.length < 50) {
//         console.log("Успешно!");
//         appData.expenses[a] = b;
//     } else {
//         console.log("Некорректно!");
//         i--;
//     }
//     i++;
// }

// Используем цикл DO...WHILE

// let i = 0;
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?", "");

//     if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != "" && b != "" && a.length < 50) {

//         console.log("Успешно!");

//         appData.expenses[a] = b;
//     } else {
//         console.log("Некорректно");
//         i--;
//     }

//     i++;
// }
// while (i < 2);






