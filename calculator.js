function calculate(expression)
{
    if (expression.substr(1, 1) === '+')
    {
        var firstNum = Number(expression.substr(0, 1));
        var operator = expression.substr(1, 1); //capture the '+'
        var secondNum = Number(expression.substr(2, 2));
    }
    else if (expression.substr(1,1) === '-')
    {
        var firstNum = Number(expression.substr(0, 1));
        var operator = expression.substr(1, 1); //capture the '+'
        var secondNum = Number(expression.substr(2, 2));
    }
    else if (expression.substr(1,1) === '*')
    {
        var firstNum = Number(expression.substr(0, 1));
        var operator = expression.substr(1, 1); //capture the '+'
        var secondNum = Number(expression.substr(2, 2));
    }

    else if (expression.substr(1,1) === '/')
    {
        var firstNum = Number(expression.substr(0, 1));
        var operator = expression.substr(1, 1); //capture the '+'
        var secondNum = Number(expression.substr(2, 2));
    }
    else if (expression.substr(1,1) === '^')
    {
        var firstNum = Number(expression.substr(0, 1));
        var operator = expression.substr(1, 1); //capture the '+'
        var secondNum = Number(expression.substr(2, 2));
    }

    else
    {
        var firstNum = Number(expression.substr(0, 2));
        var operator = expression.substr(2, 1); //capture the '+'
        var secondNum = Number(expression.substr(3, 2));
    }

    if(operator === '+')//that means i add firstNum and secondNum
    {
        return addNums(firstNum, secondNum); //returns the result of calling 'addnums'
        //after sending it firstNum and secondNum
    }
    else if (operator === '*')
    {
        return multiplyNums(firstNum, secondNum);
        //call subtract nums, etc.
    }
    else if (operator === '-')
    {
        return subtractNums(firstNum, secondNum);
    }
    else if (operator === '/')
    {
        return divideNums(firstNum, secondNum);
    }
    else if (operator === '^')
    {
        return squareNums(firstNum, secondNum);
    }

}

function addNums(p1,p2)
{
    //p1 and p2 are sent to addNums... to do this:
    return p1 + p2;

}
function multiplyNums(p1,p2)
{
    return p1 * p2;

}
function subtractNums(p1,p2)
{
    return p1 - p2
}
function divideNums(p1,p2)
{
    return p1 / p2
}
function squareNums(p1,p2)
{
    return Math.pow(p1,p2)
}
