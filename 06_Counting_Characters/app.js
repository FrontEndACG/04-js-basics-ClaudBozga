// Counting Characters: 
// Write a program that counts how 
// many characters of a specific type 
// (e.g., uppercase letters) are in a given string.
// Example Input:
// String: "Hello World"
// Type of characters to count: Uppercase letters
// Example Output:
// Number of uppercase letters: 2

var strInput = document.getElementById('str');
var inputElements = document.getElementsByClassName('messageCheckbox');

var outputParagraph = document.getElementById('output');
var outputParagraph2 = document.getElementById('output2');
var outputParagraph3 = document.getElementById('output3');

function adaugaNumar() {
    outputParagraph.innerHTML = '';
    outputParagraph2.innerHTML = '';
    outputParagraph3.innerHTML = '';

    var checkedValue = null; 
    for (var i=0; inputElements[i]; ++i) {
          if(inputElements[i].checked) {
               checkedValue = inputElements[i].value;
          }
    }
    console.log(checkedValue);

    var str = strInput.value;
    for (var i = 0; i <= str.length - 1; i++) {

    } 
}