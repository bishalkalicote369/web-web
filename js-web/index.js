console.log("Starting"); let netSalary = 3000;
let expenses = 2500;

if (netSalary > expenses) {
  console.log(`You have saved ${netSalary - expenses} this month`);
} else if (expenses > netSalary) {
  console.log(`You have lost ${expenses - netSalary} this month`);
} else {
  console.log("Your balance hasn't changed");
}


let age = 25;
if (age < 18) {
  console.log("you are junior ");
} else if (age >= 18 && age < 30) {
  console.log("you are middle ");
} else {
  console.log("you are senior");
}
