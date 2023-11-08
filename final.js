

const numbers = [];

// Function to update the results
function updateResults() {
    const numberDisplay = document.getElementById("numberDisplay");
    const sumDisplay = document.getElementById("sumDisplay");
    const averageDisplay = document.getElementById("averageDisplay");
    const maxDisplay = document.getElementById("maxDisplay");
    const minDisplay = document.getElementById("minDisplay");

    // Display the numbers entered
    numberDisplay.textContent = numbers.join(', ');

    // Calculate the sum, average, largest, and smallest numbers
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;
    const max = Math.max(...numbers);
    const min = Math.min(...numbers);

    sumDisplay.textContent = sum;
    averageDisplay.textContent = average.toFixed(2);
    maxDisplay.textContent = max;
    minDisplay.textContent = min;
}

// Add event listener for the "calculate" button
document.getElementById("addButton").addEventListener("click", function() {
    const numberInput = document.getElementById("numberInput");
    const number = parseFloat(numberInput.value);

    if (!isNaN(number)) {
        numbers.push(number);
        numberInput.value = '';
        updateResults();
    } else {
        alert("Please enter a valid number.");
    }
});

