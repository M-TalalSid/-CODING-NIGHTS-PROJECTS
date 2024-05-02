import inquirer from "inquirer"

let myBalance = 0 ;
let isContinue = true ;
const PinCode = 9825 ;

const message = "Welcome To Your ATM";
console.log(message);

let Pin_ans = await inquirer.prompt({
    type : "number",
    name : "ans",
    message : "Please Enter Your Pin Code : "
})

if(Pin_ans.ans === 9825){
    do {
        let ans = await inquirer.prompt({
            type : "list" ,
            name : "list" ,
            message : "Select Any 1 Given Option" ,
            choices : ["Deposit", "Cash Withdrawal", "Fast Transfer", "Balance Check"]
        })
    
        // ------------------- DEPOSIT ---------------------
    
        if(ans.list === "Deposit"){
            let ans = await inquirer.prompt({
                type : "number",
                name : "Deposit_Amount",
                message : "Please Enter Your Amount: "
            })
    
            if(ans.Deposit_Amount > 0){
                myBalance = myBalance + ans.Deposit_Amount
                console.log(myBalance);
            }
        }
    
        // ------------------- CASH WITHDRAWAL ---------------------
    
        else if(ans.list === "Cash Withdrawal"){
            let ans = await inquirer.prompt({
                type : "number",
                name  : "Withdrawal_Amount",
                message : "Please Enter Your Amount: "
            })
    
            if(ans.Withdrawal_Amount <= myBalance){
                myBalance = myBalance - ans.Withdrawal_Amount
                console.log(myBalance);
    
            }else{
                console.log("Not Enough Money ! ");
            }
        }
    
        // --------------------------- FAST TRANSFER ---------------------------
    
        else if(ans.list === "Fast Transfer" ){
            let ans = await inquirer.prompt({
                type : "list",
                name  : "Fast_Transfer_Amount",
                message : "Please Select Any 1 Given Option",
                choices : ["1000", "2000", "3000", "5000"]
    
            })
    
            if(ans.Fast_Transfer_Amount <= myBalance){
                if(ans.Fast_Transfer_Amount === "1000"){
                    myBalance = myBalance - ans.Fast_Transfer_Amount
                    console.log(myBalance);
    
                }else if(ans.Fast_Transfer_Amount === "2000"){
                    myBalance = myBalance - ans.Fast_Transfer_Amount
                    console.log(myBalance);
                }else if(ans.Fast_Transfer_Amount === "3000"){
                    myBalance = myBalance - ans.Fast_Transfer_Amount
                    console.log(myBalance);
                }else if(ans.Fast_Transfer_Amount === "5000"){
                    myBalance = myBalance - ans.Fast_Transfer_Amount
                    console.log(myBalance);    
                }                                   
            }                              
        }                   
        
        // ------------------------------ BALANCE CHECK --------------------------
    
        else if(ans.list === "Balance Check"){
            console.log(`Your Balance Is: ${myBalance}`);
        }
    
        // ----------------------------- While Condition -----------------------------
    
        let while_ans = await inquirer.prompt({
            type : "confirm",
            name : "Condition",
            message : "Do You Want To Continue ? "
        })
        
        if(while_ans.Condition === false){
            isContinue = false
        }
                                         
    } while (isContinue);
}

else{
    console.log("The Pin Code Is Invalid !");
}



























