// Using Loops (for and while): Multiplication 
// Table: Display the multiplication table for 
// a given number using a for loop.

// Example Input:
// Number: 7
// Example Output:
// Multiplication Table for 7:
// 7 x 1 = 7
// 7 x 2 = 14
// ...
// 7 x 10 = 70


var nrInput = document.getElementById('nr');
var outputParagraph = document.getElementById('output');
var outputParagraph2 = document.getElementById('output2');
var outputParagraph3 = document.getElementById('output3');

function adaugaNumar() {
    outputParagraph.innerHTML = '';
    outputParagraph2.innerHTML = '';
    outputParagraph3.innerHTML = '';

    var nr = Number(nrInput.value);
    for (var i = 1; i <= 10; i++) {
        outputParagraph.innerHTML = ;
        outputParagraph2.innerHTML = ;
        outputParagraph3.innerHTML = ;
    }
}
