// 1. Create a multidimensional array to hold quiz questions and answers
const array = [
    ['What is 4 + 4?', 8],
    ['What is 5 - 1?', 4],
    ['What is 3 x 5?', 15]
  ];
  
  // 2. Store the number of questions answered correctly
  let correct = '';
  
  /* 
    3. Use a loop to cycle through each question
        - Present each question to the user
        - Compare the user's response to answer in the array
        - If the response matches the answer, the number of correctly
          answered questions increments by 1
  */
  for (let i = 0; i < array.length; i++) {
    let question = prompt(array[i][0]);
    if (question = array[i][1]) {
      correct++;
    } else {
      correct--;
    };
  };
  
  // 4. Display the number of correct answers to the user
  document.querySelector('main').innerHTML = `<p>${correct}</p>`