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

    var arr = [0, 0, 0];
    var str = strInput.value;

    // asta a fost ciordita de pe stack overflow dar am inteles-o so ye

    // var checkedValue = null; 
    for (var i=0; inputElements[i]; i++) {
        if(inputElements[i].checked) {
            // checkedValue = inputElements[i].value;
            arr[i] = 1;
        }
    }

    if (arr[0] === 1) {
        if (countUpper(str) > 0)
        outputParagraph.innerHTML = countUpper(str);
    }

    if (arr[1] === 1) {
        if (countLower(str) > 0)
        outputParagraph2.innerHTML = countLower(str);
    }

    if (arr[2] === 1) {
        if (countNumbers(str) > 0)
        outputParagraph3.innerHTML = countNumbers(str);
    } 
}

function countUpper(str) {
    var ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var count = 0;
    for (i = 0; i < str.length; i++) {
        if (ALPHA.includes(str[i])) {
            count ++;
        } 
    }
    return count;
} 

function countLower(str) {
    var ALPHA = "abcdefghijklmnopqrstuvwxyz"
    var count = 0;
    for (i = 0; i < str.length; i++) {
        if (ALPHA.includes(str[i])) {
            count ++;
        } 
    }
    return count;
}

function countNumbers(str) {
    var ALPHA = "0123456789"
    var count = 0;
    for (i = 0; i < str.length; i++) {
        if (ALPHA.includes(str[i])) {
            count ++;
        } 
    }
    return count;
}

