
let money = +prompt('Введите ваш бюджет на месяц: ', '')
let time = prompt('введите дату  в формате YYYY-MM-DD', '')

let appData = {
  budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
}

let i = 0

while (i < 2) {
	let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
		b = prompt("Во сколько обойдется?", '');
	if ( typeof(a) != null && typeof(b) != null && a != "" && b != "") {
		appData.expenses[a] = b;
		i++
	} else {
		console.log('bad result')
		i--
	}
}

appData.moneyPerDay = appData.budget / 30

alert(`Ваш бюджет на 1 день составляет: ${appData.moneyPerDay} руб.`)
console.log(appData.expenses)