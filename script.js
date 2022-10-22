let money = prompt("Ваш бюджет на месяц?", " ");
let time = prompt("Введите дату в формате YYYY-MM-DD", " ");

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,
};

let firstQ = prompt("Введите обязательную статью расходов в этом месяце", "");
let secondQ = prompt("Во сколько обойдется?", "");
let thirdtQ = prompt("Введите обязательную статью расходов в этом месяце", "");
let fourthQ = prompt("Во сколько обойдется?", "");

appData.expenses.firstQ = secondQ;
appData.expenses.thirdtQ = fourthQ;

alert(appData.budget / 30);
