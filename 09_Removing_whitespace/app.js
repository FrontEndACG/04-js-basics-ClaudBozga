// Removing Whitespace: 
// Remove all whitespace from a given string.
// Example Input:
// String: "  Hello   World  "
// Example Output:
// Modified String: "HelloWorld"

var strInput = document.getElementById('str');
var outputParagraph = document.getElementById('output');

function adaugaNumar() {
    outputParagraph.innerHTML = '';
    var str = strInput.value;
    var Whitespaceremoved = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] != " ")
            Whitespaceremoved += str[i];
    }

    outputParagraph.innerHTML = Whitespaceremoved;
}