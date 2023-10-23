// Fibonacci Series: Display the first n numbers 
// in the Fibonacci series using a for loop.
// Example Input:
// Count: 8
// Example Output:
// Fibonacci Series (first 8 numbers): 0, 1, 1, 2, 3, 

var nrInput = document.getElementById('nr');
var outputParagraph = document.getElementById('output');

function adaugaNumar() {
    outputParagraph.innerHTML = '';
    var nr = Number(nrInput.value);
    var a = 0;
    var b = 1;

    if (nr === 1)
    outputParagraph.innerHTML += "Fibonacci Series (first number) 0";

    if (nr === 2)
    outputParagraph.innerHTML += "Fibonacci Series (first 2 numbers) 0 1";

    if (nr > 2) {
        outputParagraph.innerHTML += "Fibonacci Series (first" + nr + "numbers): ";
        outputParagraph.innerHTML += "0, 1, "
        for (var i = 3; i <= nr; i++) {
            if (b >= a) {
                a = b + a;
                outputParagraph.innerHTML += a + ", ";
            } else if (a >= b) {
                b = b + a;
                outputParagraph.innerHTML += b + ", ";
            }
        }
    }
}