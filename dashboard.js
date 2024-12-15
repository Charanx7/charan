
const transactions = [
    { date: "2024-12-01", name: "Groceries", amount: 100, category: "Food" },
    { date: "2024-12-03", name: "Bus Ticket", amount: 20, category: "Travel" },
    { date: "2024-12-04", name: "Gym Membership", amount: 50, category: "Health" },
    { date: "2024-12-05", name: "Dinner", amount: 30, category: "Food" },
];

// Populate Recent Transactions Table
const transactionTable = document.getElementById("transaction-table");
transactions.forEach((transaction) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${transaction.date}</td>
        <td>${transaction.name}</td>
        <td>${transaction.amount}</td>
        <td>${transaction.category}</td>
    `;
    transactionTable.appendChild(row);
});


const spendingData = {
    Food: 130,
    Travel: 20,
    Health: 50,
};


