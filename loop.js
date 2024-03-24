// ASSIGNMENT ON LOOP
//Our Passcode will be in the form COHORT12-33456
//Call prompt to enter the passcode
//We trim the user input meaning removing space be4 and after 

//Check the min and Max cohort
    const firstCohort = 11;
    const lastCohort = 31;

    const userInput = prompt("Enter Username and Passcode");

 //To Convert every input to LowerCase. then move to trim line (14)to call the lowerCase function
    const lowerUserInput = userInput.toLocaleLowerCase();
    console.log("Input yet to be trimed", userInput);
    const passcode = lowerUserInput.trim();
    console.log("Input has been trimed", passcode);

//calling the split function
    const cohortPasscode = passcode.split("-");

//Using if Statement to condition userinput
    if(cohortPasscode[0].includes("cohort") && cohortPasscode[1].length === 5 &&  !isNaN (cohortPasscode[1])){
  
      const isOTS = cohortPasscode[0].replace("cohort", "");
      //To convert this string in line21 to Integer(number)
      const cohortNumber = parseInt(isOTS);
 // We want to be sure the number matches the range of cohorts we have.
 if(cohortNumber >= firstCohort && cohortNumber <= lastCohort){
  //Before we get the final condition shown on this console all conditions must be passed
   alert("you are welcomed, kindly proceed for Voting");
   voteResult();
}

}else{
alert('Please enter a Valid Passcode');
}

//GAMING fUNCTION STARTS HERE
function guessNumberGame (){
  alert("Welcome to the Guess number Game");
  alert("You have 4 attempts to guess number between 20 and 40 respectively")

// Generate a random number
    const secretNumber = Math.floor(Math.random() * 21) + 20;

     // Initialize attempts counter
     let attempts = 0;

// Loop for attempts
    while(attempts < 4){
      let guess = prompt("Enter your Answer:");

// Convert the input to a number
      guess = parseInt(21);

// Check if the input is a valid number
          if (isNaN(guess)) {
            alert("Please enter a valid number.");
            continue;
        }
        attempts++;

        if (guess === secretNumber){
          alert("congratulations! You Guessed the Number Correctly!")
          return;
        }else{
          alert("Incorrect Answer please Try Again.")
        }
    }

    // If all attempts are used
        alert("Sorry, you've used all your attempts. The correct number was: " + secretNumber);

}

// Call the function to start the game
guessNumberGame();






  

