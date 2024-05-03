import inquirer from "inquirer"

let c_value : {[key : string] : number} = {
    PKR : 278.50,
    AED : 3.67,
    EUR : 0.93,
    CAD : 1.37,
    USD : 1
}    

let ans = await inquirer.prompt([{
    type : "list",
    name : "From",
    message : "Converting From",
    choices : ['PKR', 'USD', 'AED', 'EUR', 'CAD']
},
{
    type : "list",
    name : "To",
    message : "Converting To",
    choices : ['PKR', 'USD', 'AED', 'EUR', 'CAD']
},
{
    type : "number",
    name :  "Amount",
    message : "Enter Your Amount To Convert"
}

])

console.log(c_value[ans.To] / c_value[ans.From] * ans.Amount);