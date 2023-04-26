var counter = 0;

function updatePrompt () {
  
  // grab the prompt constantly, which will be chosen if the button is pressed.
   document.getElementById("counter").innerHTML = "Number of clicks : " + choosePrompt();

  //when the button is clicked it displays the reutrn value of choose prompt. Choose prompt increments counter by 1.
  
}

function choosePrompt(){
  counter = counter + 1;

  return(counter);
}
