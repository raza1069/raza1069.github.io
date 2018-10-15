/* MINI PROJECT 1:
// create function called TemperatureBug that does the following:
    - Accepts 1 argument, a number that represents a temperature in degrees
    -The will return "spring, summer, etc..." based on temperature entered
    -Ex.input: 95
    -Ex. output: summer
*/


function temperatureBug()
{

    var temp = Number(document.weather.temp1.value);
    document.getElementById('weather').src="img/summer.jpg";
    document.getElementById('weather').src="img/spring.jpg";
    document.getElementById('weather').src="img/fall.jpg";
    document.getElementById('weather').src="img/winter.jpg";

    if (temp >= 80)
    {
        return 'summer' && (document.getElementById('weather').src="img/summer.jpg");
    }
    else if (temp >= 70)
    {
        return 'spring' && (document.getElementById('weather').src="img/spring.jpg");
    }
    else if (temp >= 60)
    {
        return 'fall' &&(document.getElementById('weather').src="img/fall.jpg");
    }
    else if (temp >= 50)
    {
        return 'winter' && (document.getElementById('weather').src="img/winter.jpg");
    }
    else if (temp >= -100)
    {
        return 'winter'  && (document.getElementById('weather').src="img/winter.jpg");
    }

}

/*    MINI Project 3
    TASK: write a function named 'assignGrade' that:
    -Takes 1 argument, a numeric score
-Return a grade for the score, either A, B, C, D, or F+
-call that function for a few different scores and log the result.
    HTML:
    ()form on HTML
()Input field
() Button
()Result field
()JavaScript
() See 'helloWorld' code but with numbers
*/
function assignGrade()
{
    //capture a score from HTML
    var score = Number(document.grade.num1.value);
    if (score >= 90)// that's an A
    {
        return 'A';
    }

    else if (score >= 80)

    {
        return 'B';
    }

    else if (score >= 70)

    {
        return 'C';
    }
    else if (score >= 60)
    {
        return 'D';
    }
    else if (score >= 50)
    {
        return 'F';
    }
    else if (score >= 40)
    {
        return 'F';
    }
    else if (score >= 30)
    {
        return 'F';
    }
    else if (score >= 20)
    {
        return 'F';
    }
    else if (score >= 10)
    {
        return 'F';
    }
    else if (score >= 0)
    {
        return 'F';
    }


}

function calorieCounter() {
    var cal1 = document.getElementById('activities').value;


    //return calorie
    if (cal1 == "Bowling") {
        return "120";
    }

    else if (cal1 == "Soccer") {
        return "300";
    }

    else if (cal1 == "Tennis") {
        return "350";
    }
}

