// Prime Numbers: 
// Find all prime numbers up to 
// a given number using a for loop.
// Example Input:
// Limit: 20
// Example Output:
// Prime numbers up to 20: 2, 3, 5, 7, 11, 13, 17, 19

var nrInput = document.getElementById('nr');
var outputParagraph = document.getElementById('output');

function adaugaNumar() {
    outputParagraph.innerHTML = '';
    var nr = Number(nrInput.value);

    // numerele pe care le testam daca sunt prime
    for (var i = 2; i <= nr; i++) {
        var counter = 0;
        // posibilii divizori
        for (var j = 1; j <= i; j++) {
            // restul impartirii lui i la j e 0
            if (i % j === 0) {
                counter++;
            }
        }
        if (counter === 2) {
            outputParagraph.innerHTML += i + ', ';
        }
    }
}