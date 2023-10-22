// JavaScript program to check if a string is
// substring of other.
 
// Returns true if s1 is substring of s2
function isSubstring(s1, s2)
{
    var M = s1.length;
    var N = s2.length;
 
    /* A loop to slide pat[] one by one */
    for (var i = 0; i <= N - M; i++) {
        var j;
 
        /* For current index i, check for
 pattern match */
        for (j = 0; j < M; j++)
            if (s2[i + j] != s1[j])
                break;
 
        if (j == M)
            return i;
    }
 
    return -1;
}
 
/* Driver code */
var s1 = "for";
var s2 = "geeksforgeeks";
var res = isSubstring(s1, s2);
if (res == -1)
    console.log( "Not present");
else
    console.log( "Present at index " + res);
