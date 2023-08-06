function calculateTotalExpenses() {
    const totalExpenses = Object.values(expenses).reduce((total, expense) => {
        return total + (expense || 0);
    }, 0);
    return totalExpenses;
}
const userName = window.localStorage.getItem('currentUser');
var expenses = JSON.parse(window.localStorage.getItem(userName)) || {
    taxi: null,
    food: null,
    clothes: null
};

function details() {
    let typeofexpense = document.getElementById("types_expenses").value;
    var money = Number(document.getElementById("sum").value);
    
    if (typeofexpense === "taxi") {
        expenses.taxi = (expenses.taxi || 0) + money;
    } else if (typeofexpense === "food") {
        expenses.food = (expenses.food || 0) + money;
    } else {
        expenses.clothes = (expenses.clothes || 0) + money;
    }
    
    console.log(expenses);
    
    var jsonobj = JSON.stringify(expenses);
    window.localStorage.setItem(userName, jsonobj);


}
const totalExpenses = calculateTotalExpenses();
console.log("Total Expenses:", totalExpenses);

document.getElementById("totalexpenses").innerHTML = "total expenses" +  totalExpenses
    
        