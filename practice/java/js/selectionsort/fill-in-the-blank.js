function submit() {
  // first input
  a = input1.value;
  if (a == "O(1)") {
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

  c = input3.value;
  if (c == "correct") {
    input3.value = c;
    check3.innerHTML = "<text class=quiz-correct>" + "✔" + "</text>";
  } else {
    input3.value = c;
    check3.innerHTML = "<text class=quiz-wrong>" + "✖" + "</text>";
  }
}
