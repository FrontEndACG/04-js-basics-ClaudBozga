// Finding the Smallest/Largest Element: 
// Find the smallest and largest element in an array of numbers.
// Example Input:
// Array: [8, 2, 7, 3, 11]
// Example Output:
// Smallest: 2
// Largest: 11

var arrInput = document.getElementById('arr');
var outputParagraph = document.getElementById('output');
var outputParagraph2 = document.getElementById('output2');

function adaugaNumar() {
    outputParagraph.innerHTML = '';
    outputParagraph2.innerHTML = '';
    var arr = arrInput.value.split(", ");
    var smallest = Number(arr[0]);
    var largest = Number(arr[0]);
    for (var i = 0; i <= arr.length - 1; i++) {
        if (arr[i] < smallest)
            smallest = arr[i];
        if (arr[i] > largest)
            largest = arr[i];
    }
    outputParagraph.innerHTML = smallest;
    outputParagraph2.innerHTML = largest;
}
