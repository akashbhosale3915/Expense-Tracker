let form = document.getElementById("form");
let expenseList = [];

function expense(desc, amt, date) {
  return (expenseObj = {
    description: desc,
    amount: amt,
    date,
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let description = e.target.des.value;
  let amount = e.target.amt.value;
  let date = e.target.date.value;

  let newExpense = new expense(description, amount, date);
  expenseList.push(newExpense);
  console.log(expenseList);
  addExpense();
});

function addExpense() {
  let div = document.createElement("div");
  let descText = document.createElement("p");
  let amtText = document.createElement("p");
  let dateText = document.createElement("p");
  for (let i = 0; i < expenseList.length; i++) {
    descText.innerText = `Description : ${expenseList[i].description}`;
    amtText.innerText = `Amount : ${expenseList[i].amount}`;
    dateText.innerText = `Date : ${expenseList[i].date}`;
    div.appendChild(descText);
    div.appendChild(amtText);
    div.appendChild(dateText);
    div.className = "expense";
    document.querySelector("body").appendChild(div);
  }
}
