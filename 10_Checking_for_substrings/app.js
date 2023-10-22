// Checking for Substrings: 
// Write a program that checks if 
// a given string contains a specific substring.
// Example Input:
// String: "JavaScript is a powerful language"
// Substring to check for: "powerful"
// Example Output:
// The string contains the substring "powerful."


// nu mi iese :<<< 
// ce am facut aici verifica daca contin caracterele si atat.. 

var strInput = document.getElementById('str');
var elInput = document.getElementById('element');
var outputParagraph = document.getElementById('output');

function adaugaNumar() {
    outputParagraph.innerHTML = '';
    var str = strInput.value;
    var substr = elInput.value;
    var start = [];
    var istart = 0;
    var contine = 0;
    for (var i = 0; i < substr.length; i++) {
        for (var j = 0; j < str.length; j++) {
            if (substr[i] === str[j]) {
                start[istart] = substr[i];
                i++;
                console.log(start);
            }
            istart = start.length;
        }
    }

    // outputParagraph.innerHTML = "The string contains the substring " + '"' + substr + '"';
}