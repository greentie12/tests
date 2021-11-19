// butter:$1
// eggs:$2
// milk:$3
// bread:$4
// cheese:$5

function costOfGroceries(groceries) {
  let total = 0;

  for (let x = 0; x < groceries.length; x++) {
    if (groceries[x] === "butter") {
      total++;
    } else if (groceries[x] === "eggs") {
      total += 2;
    } else if (groceries[x] === "milk") {
      total += 3;
    } else if (groceries[x] === "bread") {
      total += 4;
    } else if (groceries[x] === "cheese") {
      total += 5;
    }
  }

  return total;
}

function mostExpensiveGroceries(groceriesList) {
  let highestAmount = costOfGroceries(groceriesList[0]);
  let index = 0;

  for (let x = 1; x < groceriesList.length; x++) {
    if (costOfGroceries(groceriesList[x]) > highestAmount) {
      highestAmount = costOfGroceries(groceriesList[x]);
      index = x;
    }
  }
  return index;
}

const groceriesA = ["cheese", "butter", "eggs"];
const groceriesB = ["eggs", "milk", "bread", "bread"];
const groceriesC = ["cheese", "bread"];
const groceriesD = ["eggs", "butter"];

let score = 0;

if (costOfGroceries(groceriesA) === 8) score++;
if (costOfGroceries(groceriesB) === 13) score++;
if (costOfGroceries(groceriesC) === 9) score++;
if (costOfGroceries(groceriesD) === 3) score++;

if (
  mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD]) === 1
)
  score++;
if (mostExpensiveGroceries([groceriesA, groceriesD]) === 0) score++;
if (mostExpensiveGroceries([groceriesA, groceriesD, groceriesC]) === 2) score++;

console.log(score);
