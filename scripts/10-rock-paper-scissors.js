//convert from JSON to js object
let score = JSON.parse(localStorage.getItem('score'))||{
  wins: 0,
  losses: 0,
  ties: 0
};
let result = '';
let yourMove = '';
let computerMove = '';

updateScoreCard();

function generateComputerMove(){
  const randomNumber = Math.random();
  let computerMove = '';

  if (randomNumber >=0 && randomNumber <1/3) {
    computerMove = 'Rock';
    console.log('Computer move: '+computerMove)
    return computerMove;
  } else if(randomNumber >=1/3 && randomNumber <2/3){
    computerMove = 'Paper';
    console.log('Computer move: '+computerMove)
    return computerMove; 
  }else if(randomNumber >=2/3 && randomNumber <1){
    computerMove = 'Scissors';
    console.log('Computer move: '+computerMove)
    return computerMove;
  }
}

function updateScoreCard(){
  document.querySelector('.js-scorecard')
    .innerHTML=`Wins: ${score.wins}. Losses: ${score.losses}. Ties: ${score.ties}`
    console.log(score);
}

function showStatus(result){
  document.querySelector('.js-result')
    .innerHTML = `${result}`
}

function showMoves(yourMove, computerMove){
  document.querySelector('.js-moves')
      .innerHTML = `You <img src="images/${yourMove}-emoji.png" class="move-icon"> - <img src="images/${computerMove}-emoji.png" class="move-icon"> Computer`
}

function compareMoves(yourMove, computerMove){

  if(yourMove === 'Rock'){
    if(computerMove ==='Rock'){
      result = 'You Tie';
    }else if(computerMove === 'Paper'){
      result = 'You Lose';
    }else if(computerMove === 'Scissors'){
      result = 'You Win';
    }
  }
  if (yourMove === 'Paper') {
    if(computerMove ==='Rock'){
      result = 'You Win';
    }else if(computerMove === 'Paper'){
      result = 'You Tie';
    }else if(computerMove === 'Scissors'){
      result = 'You Lose';
    }
  }
  if (yourMove === 'Scissors') {
    if(computerMove ==='Rock'){
      result = 'You Lose';
    }else if(computerMove === 'Paper'){
      result = 'You Win';
    }else if(computerMove === 'Scissors'){
      result = 'You Tie';
    } 
  }
  if (result === 'You Win'){
    score.wins+=1;
  }else if(result === 'You Lose'){
    score.losses+=1;
  }else if(result === 'You Tie'){
    score.ties+=1;
  }
  //convert from JS objetc to JSON object
  // store in localstorage to refresh proof the score
  localStorage.setItem('score', JSON.stringify(score));

  showStatus(result);

  showMoves(yourMove, computerMove)

  updateScoreCard();

  // alert(`You picked ${yourMove}. Computer picked ${computerMove}. ${result}.
  // Wins: ${score.wins}. Losses: ${score.losses}. Ties: ${score.ties}`)

  return result
}