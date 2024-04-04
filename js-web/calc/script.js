function checkMultiple() {
  // Get user input
  var userInput = parseInt(document.getElementById("numberInput").value);

  // Check if the number is a multiple of 5
  if (userInput % 5 === 0) {
    document.getElementById("result").innerText = userInput + " is a multiple of 5.";
  } else {
    document.getElementById("result").innerText = userInput + " is not a multiple of 5.";
  }
}
