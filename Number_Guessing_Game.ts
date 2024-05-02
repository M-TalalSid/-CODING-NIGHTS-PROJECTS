import inquirer from "inquirer"

let roundNumber : number = Math.floor((Math.random() * 5) + 1);

let userInput = await inquirer.prompt({
    type : 'number',
    name : 'GuessedNumber',
    message : 'Guess A Number Between 1 -5 '
})

if(userInput.GuessedNumber === roundNumber){
    console.log('Congratulations ! You Guessed Correctly. ');
}else {
    console.log(`Sorry ! Better Luck Next Time. Correct Ans Is: ${roundNumber}`);
}


