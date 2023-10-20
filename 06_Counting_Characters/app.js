// Counting Characters: 
// Write a program that counts how 
// many characters of a specific type 
// (e.g., uppercase letters) are in a given string.
// Example Input:
// String: "Hello World"
// Type of characters to count: Uppercase letters
// Example Output:
// Number of uppercase letters: 2

var arrInput = document.getElementById('arr');
var typeInput = document.getElementById ('element')

var checkedValue = null; 
var inputElements = document.getElementsByClassName('messageCheckbox');
for (var i=0; inputElements[i]; ++i) {
      if(inputElements[i].checked){
           checkedValue = inputElements[i].value;
      }
}
console.log(checkedValue);

var outputParagraph = document.getElementById('output');
var outputParagraph2 = document.getElementById('output2');
var outputParagraph3 = document.getElementById('output3');

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