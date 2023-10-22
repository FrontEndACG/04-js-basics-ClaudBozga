// Reverse a String: Create a function that 
// reverses a given string.
// Example Input:
// String: "javascript"
// Example Output:
// Reversed String: "tpircsavaj"

var strInput = document.getElementById('str');
var outputParagraph = document.getElementById('output');

function adaugaNumar() {
    outputParagraph.innerHTML = '';
    var str = strInput.value;
    var reversed = "";
    console.log(reversed);
    for (var i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    outputParagraph.innerHTML = reversed;
}