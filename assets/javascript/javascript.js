$( document ).ready(function(){
  // random number is chosen at beginning
  var Random=Math.floor(Math.random()*101+19);
  // random number assigned to ID in HTML doc
  $("#randomNumber").text(Random);
  // assigning variable to each gem, number between 1 and 12
  var num1 = Math.floor(Math.random()*11+1);
  var num2 = Math.floor(Math.random()*11+1);
  var num3 = Math.floor(Math.random()*11+1);
  var num4 = Math.floor(Math.random()*11+1);

  // scoreboard variables
  var userTotal = 0;
  var wins = 0;
  var losses = 0;

  $("#numberWins").text(wins);
  $("#numberLosses").text(losses);

  //INSERT FUNCTION TO RESET GAME
  function reset(){

    //set user total to 0
  }

  // congrats and lose messages

  function congrats {

    alert("Winner winner.");
    wins++;
    $("numberWins").text(wins);
    //RESET GAME

  }

  function lose {

    alert("You have lost. Try again.");
    losses++;
    $("numberLosses").text(losses);
    //RESET GAME

  }

  //gem click functions

  $("#one").on("click", function(){

    userTotal = userTotal + num1;
    $("#finalScore").text(userTotal); 

        if (userTotal == Random){
          congrats();
        }

        else if ( userTotal > Random){
          lose();
        }   
  })  

  $("#two").on("click", function(){

    userTotal = userTotal + num2;
    $("#finalScore").text(userTotal); 

        if (userTotal == Random){
          congrats();
        }

        else if ( userTotal > Random){
          lose();
        } 
  })  

  $("#three").on("click", function(){

    userTotal = userTotal + num3;
    $("#finalScore").text(userTotal);

          if (userTotal == Random){
          congrats();
        }

        else if ( userTotal > Random){
          lose();
        } 
  })  

  $("#four").on("click", function(){

    userTotal = userTotal + num4;
    $("#finalScore").text(userTotal); 
      
          if (userTotal == Random){
          congrats();
        }
        else if ( userTotal > Random){
          lose();
        }

  });   
}); 