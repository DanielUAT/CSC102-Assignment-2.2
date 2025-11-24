var totalGames = 0; // initialize total games played
var totalHeads = 0; // initialize number of heads flipped
var totalTails = 0; // initialize number of tails flipped
var totalWins = 0; // initialize number of wins
var totalLosses = 0; // initialize number of losses


 function flippedCoin() // function to simulate coin flip
 {   
     var coinFlip = Math.floor(Math.random() * 2) + 1; // returns 1 for heads and 2 for tails
    
        if (coinFlip == 1) // if random number is 1    
        {
            //flippedCoin = 'heads'; // set flipped coin to heads
            return 'heads'; // return heads
        }
        else // if random number is 2
        {
            //flippedCoin = 'tails'; // set flipped coin to tails
            return 'tails'; // return tails
        }
    
    }

function chooseCoin(coin) // function to set chosen coin based on user input
{
    
    
    totalGames++; // increment total games played by 1
     //coin=coin; // set the chosen coin based on user input
   
   //alert("Coin flipped is " + flippedCoin() + ". Chosen coin is " + coin); // alert user of their choice
   var fCoin = flippedCoin(); // store result of coin flip in variable for comparison

    if (fCoin == 'heads' && coin == 'heads') // if coin lands on heads and heads was chosen 
    {
        totalHeads++; // increment total heads flipped by 1
        totalWins++; // increment total wins by 1
        document.getElementById("results").innerHTML = "You chose Heads and the coin landed on Heads. You win!"; // display win message
    }
    
    else if (fCoin == 'heads' && coin == 'tails') // if coin lands on heads and tails was chosen 
    {
        totalHeads++; // increment total heads flipped by 1
        totalLosses++; // increment total losses by 1
        document.getElementById("results").innerHTML = "You chose Tails and the coin landed on Heads. You lose!"; // display lose message
    }

    else if (fCoin == 'tails' && coin == 'tails') // if coin lands on tails and tails was chosen
    {
        totalTails++; // increment total tails flipped by 1
        totalWins++; // increment total wins by 1       
        document.getElementById("results").innerHTML = "You chose Tails and the coin landed on Tails. You win!"; // display win message
    }   

    else if (fCoin == 'tails' && coin == 'heads') // if coin lands on tails and heads was chosen
    {
        totalTails++; // increment total tails flipped by 1
        totalLosses++; // increment total losses by 1
        document.getElementById("results").innerHTML = "You chose Heads and the coin landed on Tails. You lose!"; // display lose message 
    }

    else // error handling for invalid input    
    {
        document.getElementById("results").innerHTML = "Error: Invalid Input Flipped Coin " + fCoin + " Please choose Heads or Tails. choosecoin " + coin; // display error message
    } 
    
    
    document.getElementById("totalGames").innerHTML = "Total Games Played: " + totalGames; // update total games played on webpage
    document.getElementById("heads").innerHTML = "Total Heads Flipped: " + totalHeads; // update total heads flipped on webpage  
    document.getElementById("losses").innerHTML = "Total Losses: " + totalLosses; // update total losses on webpage
    document.getElementById("tails").innerHTML = "Total Tails Flipped: " + totalTails; // update total tails flipped on webpage
    document.getElementById("wins").innerHTML = "Total Wins: " + totalWins; // update total wins on webpage
}

function resetGame() // function to reset game statistics
{
    location.reload(); // reload the webpage to reset all statistics
}