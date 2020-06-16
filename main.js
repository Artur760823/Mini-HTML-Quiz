const correctAnswers = ['B', 'C', 'B', 'A', 'B', 'C', 'B', 'B', 'B', 'C'];
const formQuiz = document.querySelector('.quiz');
const displayScore = document.querySelector('.score');

formQuiz.addEventListener('submit', (e) => {
  e.preventDefault();
  let score = 0;
  const userAnswers = [formQuiz.q1.value, formQuiz.q2.value, formQuiz.q3.value, formQuiz.q4.value, formQuiz.q5.value, formQuiz.q6.value, formQuiz.q7.value, formQuiz.q8.value, formQuiz.q9.value, formQuiz.q10.value];
  //check correct answ
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 10;
    }
  });
  displayScore.textContent = `You are HTML Ninja in ${score}%`;


});