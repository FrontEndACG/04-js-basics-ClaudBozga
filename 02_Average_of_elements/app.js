// Average of Elements: 
// Calculate the average of elements in an array of numbers.
// Example Input:
// Array: [10, 20, 30, 40, 50]
// Example Output:
// Average: 30

// step 1: copy din sum of elements

var arrInput = document.getElementById('arr');
var outputParagraph = document.getElementById('output');

function adaugaNumar() {
    outputParagraph.innerHTML = '';
    var sum = 0;
    var arr = arrInput.value.split(" ");
    for (var i = 0; i <= arr.length - 1; i++) {
        sum += Number(arr[i]);
    }
    outputParagraph.innerHTML = sum;
}
