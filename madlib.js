function madlib()
{
    var x = [];
    var name1 = document.madlibs.input1.value.toUpperCase();
    x.push(name1);
    var adjective2 = document.madlibs.input2.value.toUpperCase();
    x.push(adjective2);
    var animal3 = document.madlibs.input3.value.toUpperCase();
    x.push(animal3);
    var noun4 = document.madlibs.input4.value.toUpperCase();
    x.push(noun4);
    var place5 = document.madlibs.input5.value.toUpperCase();
    x.push(place5);
    var person6 = document.madlibs.input6.value.toUpperCase();
    x.push(person6);
    var noun7 = document.madlibs.input7.value.toUpperCase();
    x.push(noun7);
    var food8 = document.madlibs.input8.value.toUpperCase();
    x.push(food8);
    var weapon9 = document.madlibs.input9.value.toUpperCase();
    x.push(weapon9);
    var number10 = document.madlibs.input10.value.toUpperCase();
    x.push(number10);


    return x[0].bold() + " " + "was" + " " + x[1].bold() + " " + "by the old ladys yard. Then her pet" + " " + x[2].bold() +" " + "came viciously at him for" +" " + x[1].bold() + " " +
        "by her yard. The only thing you could do is use the power of" +" " + x[3].bold() + " " + "to get rid of the old ladys pet.But that did not work instead" +" " + x[0].bold() +" " +
        "kept running until he reached" + " " + x[4].bold() + " " +". At" +" " + x[4].bold() + " " + x[5].bold() + " " + "was wearing a" +" " + x[6].bold() + " " + "costume,and he was selling" +" " + x[7].bold() + " " +
        ". So + " " + x[0].bold() + " " was so hungry he picked up a" + x[8].bold()
        + "and hit the guy" + " " + x[9].bold() +" " + "times and stole" + " " + x[9].bold() + " " + x[7].bold() + ".";
