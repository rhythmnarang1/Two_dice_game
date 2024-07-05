function getRandomDiceImage() {
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  return 'images/dice' + randomNumber + '.png';
}

function rollDice() {
  var rollingInterval = setInterval(function() {
      document.querySelector('.img1').setAttribute('src', getRandomDiceImage());
      document.querySelector('.img2').setAttribute('src', getRandomDiceImage());
  }, 100); // Change images every 100 milliseconds

  setTimeout(function() {
      clearInterval(rollingInterval);

      var randomNumber1 = Math.floor(Math.random() * 6) + 1;
      var randomNumber2 = Math.floor(Math.random() * 6) + 1;

      document.querySelector('.img1').setAttribute('src', 'images/dice' + randomNumber1 + '.png');
      document.querySelector('.img2').setAttribute('src', 'images/dice' + randomNumber2 + '.png');

      if (randomNumber1 > randomNumber2) {
          document.querySelector('h1').textContent = 'Player 1 Wins! 🏅';
      } else if (randomNumber1 < randomNumber2) {
          document.querySelector('h1').textContent = 'Player 2 Wins! 🏅';
      } else {
          document.querySelector('h1').textContent = 'It\'s a Draw!';
      }
  }, 4000); // Stop rolling after 4000 milliseconds (4 seconds)
}

document.getElementById('rollButton').addEventListener('click', rollDice);
