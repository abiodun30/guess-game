let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function (){
  const guess = Number (document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess){
    document.querySelector('.guessing').textContent = '⛔ no number!';
  } else if (guess === secretNumber){
    document.querySelector('.guessing').textContent = '🎉 correct number';
    
    document.querySelector('.numb').textContent = secretNumber;
    
    document.querySelector('body').style.backgroundColor='yellowgreen'
    score++;

    if (score > highscore){
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    document.querySelector('.score').textContent = score;

  } else if (guess > secretNumber){
    if (score > 0){
      document.querySelector('.guessing').textContent = '🤦‍♀️ too high';
      score--;
      document.querySelector('.score').textContent=score;
    } else {
      document.querySelector('.guessing').textContent = '🥹 you lost the game';
    }

  } else if (guess < secretNumber){
    if (score > 0){
      document.querySelector('.guessing').textContent = '🤦‍♀️ too low';
      score--;
      document.querySelector('.score').textContent=score;
    } else {
      document.querySelector('.guessing').textContent = '🥹 you lost the game';
    }
  }
});

document.querySelector('.but').addEventListener('click', function(){
 score = 20;
 secretNumber = Math.trunc(Math.random() * 20) + 1;

 document.querySelector('.guessing').textContent = 'start guessing...';
 document.querySelector('.score').textContent = score;

 document.querySelector('.numb').textContent = '?';
 document.querySelector('.guess').value = '';
 document.querySelector('body').style.backgroundColor ='orange';

});
