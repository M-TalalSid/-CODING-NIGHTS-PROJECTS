import inquirer from 'inquirer'

const ans = await inquirer.prompt([{
    type : "number",
    name : "first_number",
    message : "enter your first number: "
},
{
    type : "number",
    name : "second_number",
    message : "enter your second number: "
},
{
    type : "list",
    name : "operator",
    message : "please select operation type: ",
    choices : ["Addition", "Subtraction", "Multiplication", "Division"]
}
])

if(ans.operator === "Addition"){
    console.log(ans.first_number + ans.second_number);
}
else if(ans.operator === "Subtraction"){
    console.log(ans.first_number - ans.second_number);
}
else if(ans.operator === "Multiplication"){
    console.log(ans.first_number * ans.second_number);
}
else if(ans.operator === "Division"){
    console.log(ans.first_number / ans.second_number);
} else {
    console.log("Please select a valid operator");
}