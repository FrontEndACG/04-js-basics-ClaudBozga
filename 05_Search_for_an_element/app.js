// Search for an Element: 
// Write a program that searches for a specific element 
// in an array and returns its position or an 
// error message if the element is not found.
// Example Input:
// Array: [10, 20, 30, 40, 50]
// Element to find: 30
// Example Output:
// Element found at position 2.

var arrInput = document.getElementById('arr');
var elInput = document.getElementById('element')
var outputParagraph = document.getElementById('output');

function adaugaNumar() {
    outputParagraph.innerHTML = '';
    var arr = arrInput.value.split(", ");
    var element = Number(elInput.value);
    var pos = -1;
    var string = "found at position "
    for (var i = 0; i <= arr.length - 1; i++) {
        if (element === Number(arr[i])) {
            pos = i;
        } 
    }
    if (pos > -1) {
        outputParagraph.innerHTML = string + pos;
    } else {
        string = "Error element not found"
        outputParagraph.innerHTML = string;
    }
}