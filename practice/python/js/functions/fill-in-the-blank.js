function submit() {
    
    // first input
    a = input1.value;
    if (a == "Return" || a == "return") {
        input1.value = a;
        check1.innerHTML = "<text class=quiz-correct>" + "✔" + "</text>";
    } else {
        input1.value = a;
        check1.innerHTML = "<text class=quiz-wrong>" + "✖" + "</text>";
    }

    // second input
    b = input2.value;
    if (b == "def" || b == "Def") {
        input2.value = b;
        check2.innerHTML = "<text class=quiz-correct>" + "✔" + "</text>";
    } else {
        input2.value = b;
        check2.innerHTML = "<text class=quiz-wrong>" + "✖" + "</text>";
    }

    // third input
    c = input3.value;
    if (c == "correct") {
        input3.value = c;
        check3.innerHTML = "<text class=quiz-correct>" + "✔" + "</text>";
    } else {
        input3.value = c;
        check3.innerHTML = "<text class=quiz-wrong>" + "✖" + "</text>";
    }

    // fourth input
    d = input4.value;
    if (d == "variables" || d == "Variables") {
        input4.value = d;
        check4.innerHTML = "<text class=quiz-correct>" + "✔" + "</text>";
    } else {
        input4.value = d;
        check4.innerHTML = "<text class=quiz-wrong>" + "✖" + "</text>";
    }

    // fifth input
    e = input5.value;
    if (e == "correct") {
        input5.value = e;
        check5.innerHTML = "<text class=quiz-correct>" + "✔" + "</text>";
    } else {
        input5.value = e;
        check5.innerHTML = "<text class=quiz-wrong>" + "✖" + "</text>";
    }

    
}
