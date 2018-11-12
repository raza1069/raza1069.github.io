/*
Gameplan :

HTML
(*) Calculator Window foe operstion to be shown along with results
() Number buttons for the caculator
() Operator buttons (+. -, /, *, Etc)
() '=' button
() Reset or Clear button


Javascript:
()  Function that captures what wa typed in the calculatorWindow
() function that will add numbers, subtract, etc
 */
function calculate(expression)
{
    //expression is a STRING of everything in your calculatorWindow
    // We need to EXTRACT  the first number from the 'expression'
    // expression = 1+2


    var firstNum = Number(expression.substr(0, 2));
    var operator = expression.substr(2, 1); // capture the '+'
    var secondNum = Number(expression.substr(3, 2));

    if(expression.substr(2,1)=== '+')
    {
        var firstNum = Number(expression.substr(0, 2));
        var operator = expression.substr(2, 1); // capture the '+'
        var secondNum = Number(expression.substr(3, 2));
    }
    else if(expression.substr(2,1)=== '-')
    {
        var firstNum = Number(expression.substr(0, 2));
        var operator = expression.substr(2, 1); // capture the '+'
        var secondNum = Number(expression.substr(3, 2));
    }
    else if(expression.substr(2,1)=== '/')
    {
        var firstNum = Number(expression.substr(0, 2));
        var operator = expression.substr(2, 1); // capture the '+'
        var secondNum = Number(expression.substr(3, 2));
    }
    else if(expression.substr(2,1)=== '*')
    {
        var firstNum = Number(expression.substr(0, 2));
        var operator = expression.substr(2, 1); // capture the '+'
        var secondNum = Number(expression.substr(3, 2));
    }
    else if(expression.substr(2,1)=== '^')
    {
        var firstNum = Number(expression.substr(0, 2));
        var operator = expression.substr(2, 1); // capture the '+'
        var secondNum = Number(expression.substr(3, 2));
    }


    var firstNum = Number(expression.substr(0, 2));
    var operator = expression.substr(2, 1); // capture the '+'
    var secondNum = Number(expression.substr(3, 2));







    if (operator === '+')// that means I add firstnum and second num
    {
        return addNums(firstNum, secondNum);
    }
    else if (operator === '-')
    {
        return subtractNums(firstNum, secondNum)
    }
    else if (operator === '/')
    {
        return divideNums(firstNum, secondNum)
    }
    else if (operator === '*')
    {
        return multiplyNums(firstNum, secondNum)
    }
    else if (operator === '^')
    {
        return squareNums(firstNum, secondNum)
    }






}

function addNums(p1, p2)
{
    return p1 + p2;
}
function subtractNums(p1, p2)
{
    return p1 - p2;
}
function divideNums(p1, p2)
{
    return p1 / p2;
}
function multiplyNums(p1, p2)
{
    return p1 * p2;
}
function squareNums(p1, p2)
{
    return Math.pow(p1 , p2);
}
