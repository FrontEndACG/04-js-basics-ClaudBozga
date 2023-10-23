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
// update a iesit

var strInput = document.getElementById('str');
var substrInput = document.getElementById('substr');
var outputParagraph = document.getElementById('output');


function adaugaNumar() {
    outputParagraph.innerHTML = '';
    var substr = substrInput.value;
    var str = strInput.value;
    var afisare = 0;

    var lungimeSubstr = substr.length;
    var lungimeStr = str.length;

    for (var i = 0; i <= lungimeStr - lungimeSubstr; i++) {
        // console.log(i, "i");
        for (var j = 0; j < lungimeSubstr; j++) {
            // console.log(j, "j");
            if (str[i + j] != substr[j]) {
                // console.log("break");
                break;
            }
        }
        if (j === lungimeSubstr) {
            // console.log("afisare");
            afisare = 1;
            outputParagraph.innerHTML += "The string contains the substring " + '"' + substr + '"';
        }
    }
    if (afisare === 0)
    {
        outputParagraph.innerHTML += "The substring was not found";
    }
}

// gandirea de dinainte de ciordeala si apel cu alexandra v.

// function adaugaNumar() {
//     outputParagraph.innerHTML = '';
//     var str = strInput.value;
//     var substr = elInput.value;
//     // var contine = 0;
//     var indexArr = [];
//     for (var i = 0; i < substr.length; i++) {
//         for (var j = 0; j < str.length; j++) {
//             if (indexArr.length === 0) {
//                 if (substr[i] === str[j]) {
//                     indexArr.push(j);
//                     i++;
//                 }
//             } else if ((substr[i] === str[j]) && (j - indexArr[indexArr.length -1] === 1)) {
//                 indexArr.push(j);
//                 i++;
//             } else if (j - indexArr[indexArr.length -1] != 1) {
//                 indexArr = [];
//             }
//             console.log(indexArr, i, j);
//         }
//     }

    // outputParagraph.innerHTML = "The string contains the substring " + '"' + substr + '"';
// }