const USER_NAME = window.localStorage.getItem('currentUser');
var expenses = JSON.parse(window.localStorage.getItem(USER_NAME + 'expenses')) || [];

function details(e) {
    e.preventDefault();
    let typeofexpense = document.getElementById("types_expenses").value;
    var money = Number(document.getElementById("sum").value);

    const expense = {
        sum: money,
        type: typeofexpense,
        date: document.getElementById('expenses_date').value
    }

    expenses.push(expense);
    var jsonobj = JSON.stringify(expenses);
    window.localStorage.setItem(USER_NAME + 'expenses', jsonobj);


}
