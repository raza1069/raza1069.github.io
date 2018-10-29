function tenToSmall(num, base) // this function will convert a base 10 function to a smaller base.
{
    // the tenToSmall function is expecting a number (num) in base 10
    // it will convert the number (num)to the value of 'base'
    num = 10; // number to convert
    base = 2; // destination base
     smallNum = " "; // store remainders here

    while (num > 0)// continue looping while num isn't zero
    {
        smallNum = num%base + smallNum; //3%5 = 2.....% returns remainder
        // setup num for the next iteration of the loop
        num = Math.floor(num/base);
        alert (smallNum)
    }


    return smallNum;
}

function smallToTen(num, base) // convert a small-base number to base-10
{

    num = 1011; // 13
    base = 2; // base of number to convert to base 10
     var tenNum = 0; // stores number to be output at the end
     var numLength = num.toString().length;

    while (numLength > 0)
    {
        var denominator = Math.pow(10,(numLength-1)); //gets denominator of fraction
        // for 1101 denominator will be 1000 100 10 1
        var currentDigit = Math.floor(num/denominator); // capture a 1 or 0 to multiply by 2^numLength
        //above means 1101/1000 = 1.... 01/10 = 0.... 1/1 = 1....
        tenNum =tenNum + currentDigit*Math.pow(base, numLength-1);
        //currentDigit*2*3 .... currentDigit*2^2... currentDigit*2^1 etc.
        num =num%denominator; //reduces num for next iteration...
        numLength--; // decrease the numLength value by 1... eventually it will hit zero

    }
    return tenNum;
}

//challenge
// write a program that takes on 1 argument (parameter) a number
// your program will expand the number of 10...
// example input: 2476 output: 2000 + 400 + 70 + 6
//create a new for on index.html, with 1 input, 1 results, 1 button.

function expandNum()
{
    var x = 2476;
    var numLength = x.toString().length;
    var output = "";

    for (var i=0; i < numLength; i++ )
    {
        x = x.toString(); // converts x to a string and saves result into 'x'
        var digit = x.substr(i, 1);// substr(startIndex, Lenght)
        // if I capture '2' at i=0
        var power = Math.pow(10, numLength-(1 + i));

        if (i < numLength-1)
        {
            //update the output string....
            output = output + digit*power + " + ";
        }
        else
        {
            output = output + digit*power;
        }
    }

    return output;

}
