// Palindrome Check: 
// Check if a given string is a palindrome 
// (reads the same forwards and backward).
// Example Input:
// String: "racecar"
// Example Output:
// The string "racecar" is a palindrome.

var strInput = document.getElementById('str');
var outputParagraph = document.getElementById('output');

function adaugaNumar() {
    outputParagraph.innerHTML = '';
    var str = strInput.value.split("");
    var reversed = [];
    for (var i = str.length - 1; i >= 0; i--) {
        reversed.push(str[i]);
    }

    if (str.toString() === reversed.toString()) {
        outputParagraph.innerHTML = "Yay! este palindrom";
    } else {
        outputParagraph.innerHTML = "Oif! nu este palindrom";
    }
}