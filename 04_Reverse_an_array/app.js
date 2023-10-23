// Reverse an Array: 
// Create a function that reverses an array of elements.
// Example Input:
// Array: [1, 2, 3, 4, 5]
// Example Output:
// Reversed Array: [5, 4, 3, 2, 1]

var arrInput = document.getElementById('arr');
var outputParagraph = document.getElementById('output');

function adaugaNumar() {
    outputParagraph.innerHTML = '';
    var arr = arrInput.value.split(", ");
    var reversed = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    outputParagraph.innerHTML = reversed;
}