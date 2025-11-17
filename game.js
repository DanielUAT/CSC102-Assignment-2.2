var totalGames = 0; // initialize total games played
var totalHeads = 0; // initialize number of heads flipped
var totalTails = 0; // initialize number of tails flipped
var totalWins = 0; // initialize number of wins
var totalLosses = 0; // initialize number of losses
var choosecoin = 0; // initialize chosen coin variable
var outcome = 0; // initialize outcome variable

/*function choose() // function if heads is chosen
{
    chosenCoin=1; // set chosen coin to heads 1=heads 2=tails
}

function chooseTails() // function if tails is chosen
{
    chosenCoin=2; // set chosen coin to tails 1=heads 2=tails
} */
function flippedCoin() // function to simulate coin flip
{
    return Math.floor(Math.random() * 2) + 1; // returns 1 for heads and 2 for tails
}
function chooseCoin(coin) // function to set chosen coin based on user input
{
     chosenCoin=coin; // set the chosen coin based on user input

    totalGames++; // increment total games played by 1
    document.getElementById("totalGames").innerHTML = "Total Games Played: " + totalGames; // update total games played on webpage
    
    if (flippedCoin() == 1 && chosenCoin == 1) // if coin lands on heads and heads was chosen 
    {
        totalHeads++; // increment total heads flipped by 1
        totalWins++; // increment total wins by 1
        document.getElementById("wins").innerHTML = "Total Wins: " + totalWins; // update total wins on webpage
        document.getElementById("results").innerHTML = "You chose Heads and the coin landed on Heads. You win!"; // display win message
        document.getElementById("heads").innerHTML = "Total Heads Flipped: " + totalHeads; // update total heads flipped on webpage
    }
    
    else if (flippedCoin() == 1 && chosenCoin == 2) // if coin lands on heads and tails was chosen 
    {
        totalHeads++; // increment total heads flipped by 1
        totalLosses++; // increment total losses by 1
        document.getElementById("losses").innerHTML = "Total Losses: " + totalLosses; // update total losses on webpage
        document.getElementById("results").innerHTML = "You chose Tails and the coin landed on Heads. You lose!"; // display lose message
        document.getElementById("heads").innerHTML = "Total Heads Flipped: " + totalHeads; // update total heads flipped on webpage 
    }
    
    else if (flippedCoin() == 2 && chosenCoin == 2) // if coin lands on tails and tails was chosen
    {
        totalTails++; // increment total tails flipped by 1
        totalWins++; // increment total wins by 1
        document.getElementById("wins").innerHTML = "Total Wins: " + totalWins; // update total wins on webpage
        document.getElementById("results").innerHTML = "You chose Tails and the coin landed on Tails. You win!"; // display win message
        document.getElementById("tails").innerHTML = "Total Tails Flipped: " + totalTails; // update total tails flipped on webpage
    }   
    
    else if (flippedCoin() == 2 && chosenCoin == 1) // if coin lands on tails and heads was chosen
    {
        totalTails++; // increment total tails flipped by 1
        totalLosses++; // increment total losses by 1
        document.getElementById("losses").innerHTML = "Total Losses: " + totalLosses; // update total losses on webpage
        document.getElementById("results").innerHTML = "You chose Heads and the coin landed on Tails. You lose!"; // display lose message
        document.getElementById("tails").innerHTML = "Total Tails Flipped: " + totalTails; // update total tails flipped on webpage
    }

    else // error handling for invalid input    
    {
        document.getElementById("results").innerHTML = "Error: Invalid Input Flipped Coin " +flippedCoin() + " Please choose Heads or Tails. choosecoin "+ choosencoin; // display error message
    }   
}

function resetGame() // function to reset game statistics
{
    location.reload(); // reload the webpage to reset all statistics
}