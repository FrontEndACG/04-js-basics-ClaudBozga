// Sum of Elements: 
// Write a program that calculates the sum of 
// all elements in an array of numbers.
// Example Input:
// Array: [1, 2, 3, 4, 5]
// Example Output:
// Sum: 15


var arrInput = document.getElementById('arr');
var outputParagraph = document.getElementById('output');

function adaugaNumar() {
    outputParagraph.innerHTML = '';
    var sum = 0;
    var arr = arrInput.value.split(", ");
    for (var i = 0; i <= arr.length - 1; i++) {
        sum += Number(arr[i]);
    }
    outputParagraph.innerHTML = sum;
}
