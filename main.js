  // Should Test Which Hand Won
  // Should detect a tie
  // Should scrub input to ensure lowercase with trimmed whitespace
  const rockPaperScissors = () => {

  let hand1 = prompt("Player 1: Rock, Paper, or scissors?")
  let hand2 = prompt("Player 2: Rock, Paper, or Scissors?")
  let userOne = hand1.toLowerCase().trim();
  let userTwo = hand2.toLowerCase().trim();
  
  if (userOne === userTwo) {
    // It's a tie
    document.getElementById("display-element").innerHTML = (`It's a tie!`)
    console.log("It's a tie!")
    // return "It's a tie!"
  } else if ((userOne == 'rock' && userTwo == 'scissors') || (userOne == 'scissors' && userTwo == 'paper') || (userOne == 'paper' && userTwo == 'rock')) {
    // userOne Wins
    document.getElementById("display-element").innerHTML = (`Player one wins!`)
    console.log("Hand1 Wins!")
    // return "Hand one wins!"
  } else if ((userTwo == 'rock' && userOne == 'scissors') || (userTwo == 'scissors' && userOne == 'paper') || (userTwo == 'paper' && userOne == 'rock')){
    // userTwo Wins
    document.getElementById("display-element").innerHTML = (`Player two wins!`)
    console.log("Hand2 Wins!")
    // return "Hand two wins!"
  } else {
    document.getElementById("display-element").innerHTML = (`(${hand1} or ${hand2}) is invalid. No winner detected.`)
    console.log("Error, no winner detected.")
    // return "Error, no winner detected."
  }
}
