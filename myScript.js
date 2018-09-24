function addInputs ()
{
    //create variable FROm index.html
    var val1 = Number(document.getElementById('num1').value); //grabs the text in the input box called num1
    var val2 = Number(document.getElementById('num2').value); //grabs the text in the input box called num2

    return val1 + val2;
}