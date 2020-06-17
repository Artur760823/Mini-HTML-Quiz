const correctAnswers = ['B', 'C', 'B', 'A', 'B', 'C', 'B', 'B', 'B', 'C'];
const formQuiz = document.querySelector('.quiz');
const displayScore = document.querySelector('.score');

//Add listening for input - submit

formQuiz.addEventListener('submit', (e) => {
  e.preventDefault();
  let score = 0;
  const userAnswers = [formQuiz.q1.value, formQuiz.q2.value, formQuiz.q3.value, formQuiz.q4.value, formQuiz.q5.value, formQuiz.q6.value, formQuiz.q7.value, formQuiz.q8.value, formQuiz.q9.value, formQuiz.q10.value];
  //check correct answ & add score for each correct answer
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 10;
    }

  });
  scrollTo(0, 0);

  //score animation
  let outPutScore = 0;
  const timer = setInterval(() => {
    displayScore.textContent = `You are HTML Jedi in ${outPutScore}%`;
    if (outPutScore === score) {
      clearInterval(timer)
    } else {
      outPutScore++;
    }
  }, 10);
});

