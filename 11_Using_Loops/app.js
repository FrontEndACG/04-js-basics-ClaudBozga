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


// ma chinui sa se afiseze dar gandirea am gandit o ok

var nrInput = document.getElementById('nr');
var outputParagraph = document.getElementById('output');

function adaugaNumar() {
    console.log("bnx");
    outputParagraph.innerHTML = '';
    var result = 1;

    var nr = Number(nrInput.value);
    for (var i = 1; i <= 10; i++) {
        result = nr * i;

    var resultItem = document.createElement("p");
    resultItem.textContent = nr + " x " + i + " = " + result;
    outputParagraph.appendChild(resultItem);
    }
}