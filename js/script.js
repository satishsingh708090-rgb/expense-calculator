function calculate() {
    let income = Number(document.getElementById("income").value);
    let expense = Number(document.getElementById("expense").value);

    let balance = income - expense;

    document.getElementById("totalIncome").innerText = "₹" + income;
    document.getElementById("totalExpense").innerText = "₹" + expense;
    document.getElementById("balance").innerText = "₹" + balance;
}
