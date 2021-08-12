// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question:
      "What is the reason for selection sort's time complexity of O(n^2)?",
    answer: "The nested for loops",
    options: [
      "Iterating through the array twice",
      "The nested for loops",
      "It is because of the time wasted on designating space for all the extra variables",
      "All sorting algorithms have the same time complexity of O(n^2)",
    ],
  },
  {
    numb: 2,
    question:
      "When sorting in ascending order, the values at the indexes before the current index of i are:",
    answer: "Sorted from least to greatest with regards to the entire array",
    options: [
      "Sorted from least to greatest with regards to the entire array",
      "Sorted from least to greatest amongst themselves",
      "Unsorted",
      "Sorted from greatest to least with regards to the entire array",
    ],
  },
  {
    numb: 3,
    question:
      "Why does the outer for loop only iterate to the second last element in the array?",
    answer:
      "All elements before it will be sorted in order from least to greatest with regards to the entire array",
    options: [
      "False, it does iterate to the last element in the array",
      "All elements before it will be sorted in order from least to greatest with regards to the entire array",
      "Iterating to the final element can cause issues, such as reversing the entire array",
      "The last element in any array is always null",
    ],
  },
  {
    numb: 4,
    question: "What does Big O notation represent?",
    answer:
      "The time and space complexity of an algorithm in the worst-case scenario",
    options: [
      "How hard it is to implement an algorithm",
      "The time and space complexity of an algorithm in the worst-case scenario",
      "The time and space complexity of an algorithm in its best-case scenario",
      "Measures how an algorithm graphs in a circle, to determine its efficiency",
    ],
  },
  {
    numb: 5,
    question: "What is the purpose of the inner for loop?",
    answer:
      "To find the index from 'i' to the end of the array with the smallest element",
    options: [
      "To search for duplicates",
      "To check the elements at the indexes before 'i' to see if anything is unsorted",
      "To replace all values with negative numbers for sorting purposes",
      "To find the index from 'i' to the end of the array with the smallest element",
    ],
  },

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },

  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];
