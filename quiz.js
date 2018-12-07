function checkAnswers()
{

    var feedback = [];
    var score = 0;
    var q1answer = document.quiz.a1.value.toLowerCase();
    var q4answer = document.quiz.a4.value.toLowerCase();


    if (q1answer === 'fortnite')
    {
        score = score + 1;
        feedback.push("Question one is corrrrrrect!!");
    } else
    {
        feedback.push("WRONG Question 1 was fortnite");
    }


    if (document.quiz.a2.value === 'Brazil')
    {
        score++;
        feedback.push("Question 2 is corrrrrrect!!");
    } else
    {
        feedback.push("WRONG Question 2 was brazil");
    }

    if (document.quiz.a3B.checked === true && document.quiz.a3C.checked === true && document.quiz.a3E.checked === true)
    {
        if (document.quiz.a3D.checked === true && document.quiz.a3A.checked === true)
        {
            feedback.push("Wrong, question 3 is Godzilla, King Kong, and Lochness monster");
        }
        else
        {
            score++;
            feedback.push("question 3 is CORRECT!! Godzilla, King Kong, and Lochness monster");
        }
    }
    else
    {
        feedback.push("Wrong, question 3 is Godzilla, King Kong, and Lochness monster");
    }


    if (q4answer === "loohcs hgih setatse namffoh")
    {
        score++;
        feedback.push("Question 4 is corrrrrrect!!");
    } else
    {
        feedback.push("WRONG Question 4 was loohcs hgih setatse namffoh");
    }

    if (document.quiz.a5.value === 'Tim Cook')
    {
        score++;
        feedback.push("Question 5 is corrrrrrect!!");
    } else
    {
        feedback.push("WRONG Question 5 was Tim Cook");
    }

    if (document.quiz.a6A.checked === true && document.quiz.a6C.checked === true && document.quiz.a6E.checked === true)
    {
        if (document.quiz.a6D.checked === true && document.quiz.a3B.checked === true)
        {
            feedback.push("Wrong, question 6 is Modric, messi and ronaldo");
        }
        else
        {
            score++;
            feedback.push("question 6 is CORRECT!! Modric, messi and ronaldo");
        }
    }
    else
    {
        feedback.push("Wrong, question 3 is Godzilla, King Kong, and Lochness monster");
    }


    return feedback + "your score was" + score;






}
