// 1. Create a multidimensional array to hold quiz questions and answers
const questions = [
    ['What is 4 + 4?', 8],
    ['What is 5 - 1?', 4],
    ['What is 3 x 5?', 15]
];

// 2. Store the number of questions answered correctly
let correct = 0;
let correctQuestionsArray = [];
let wrongQuestionsArray = [];

/* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/
for (let i = 0; i < questions.length; i++) {
    let question = questions[i][0];
    let answer = questions[i][1];
    let response = prompt(question);
    if (+response === answer) {
        correctQuestionsArray.push(question);
        correct++;
    } else {
        wrongQuestionsArray.push(question)
    };
};

function createListItems(arr) {
    let items = '';
    for (let i = 0; i < arr.length; i++) {
        items += `<li>${arr[i]}</li>`;
    }
    return items;
}

// 4. Display the number of correct answers to the user
document.querySelector('main').innerHTML = `
  <h1>Correct Answers: ${correct}</h1>
  <h1>Correct Questions:</h1> 
  <ol>${createListItems(correctQuestionsArray)}</ol>
  <h1>Wrong Questions:</h1> 
  <ol>${createListItems(wrongQuestionsArray)}</ol>
  `