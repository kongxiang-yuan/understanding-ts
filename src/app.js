/**
 * @declaration core Types
 * number string boolean
 */
function add(n1, n2, showReslut, phrase) {
    var result = n1 + n2;
    if (showReslut) {
        console.log(phrase + result);
    }
    return result;
}
var input1 = 18;
var input2 = 2.5;
var printReslut = true;
var resultPhrase = 'result is:';
var reslut = add(input1, input2, printReslut, resultPhrase);
console.log(reslut);
