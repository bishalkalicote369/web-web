const a = 4;
const b = 2;
const operation = 'minus';

let result;

switch (operation) {
  case 'plus':
    result = a + b;
    break;
  case 'minus':
    result = a - b;
    break;
  case 'multiply':
    result = a * b;
    break;
  case 'divide':
    result = a / b;

    break;
  default:
    console.log("Invalid operation");
}
result = console.log(`The result of ${a} ${operation} ${b} is: ${result}`);

