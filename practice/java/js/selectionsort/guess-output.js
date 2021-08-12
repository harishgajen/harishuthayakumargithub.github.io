function guess_output() {
  // first input
  a = output1.value;
  var b = a.replace(/\s/g, "");
  if (
    b == "for(intj=i+1;j<arr.length;j++){" ||
    b == "for(intj=i+1;j<arr.length;j++){//*Mistake"
  ) {
    output1.value = a;
    outputcheck1.innerHTML = "<text class=quiz-correct>" + "✔" + "</text>";
  } else {
    output1.value = a;
    outputcheck1.innerHTML = "<text class=quiz-wrong>" + "✖" + "</text>";
  }
}
