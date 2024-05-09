import inquirer from "inquirer"
import Choices from "inquirer/lib/objects/choices.js";

let todo_list : string[] = [];

let while_condition : boolean = true;

while (while_condition === true){

    // -------------------------- Options -------------------------
    let option = await inquirer.prompt([{
        type : "list",
        name  : "User_Option",
        message : "Select Any 1 Option",
        choices : ["Add", "Remove"]
    }])

    // -------------------------- Add ------------------------
    if(option.User_Option === "Add"){
        let ans = await inquirer.prompt([{
            type : "input",
            name : "User_Ans",
            message : "Write Something To Add In The Task List"
        }])

        if (ans.User_Ans !== ""){
            todo_list.push(ans.User_Ans);
            console.log(todo_list);
        }
        else {
            console.log("Please Write Something To Add In The To-Do List");
        }
    }

    // ------------------------------ Remove ----------------------------
    else if (option.User_Option === "Remove"){
        let removeChoice = await inquirer.prompt([{
            type : "list",
            name : "Remove_Item",
            message : "Select An Item To Remove",
            choices : todo_list
        }]);

        let index_to_remove = todo_list.indexOf(removeChoice.Remove_Item);
        
        if(index_to_remove >= 0){
            todo_list.splice(index_to_remove, 1);
            console.log("You Removed : ", removeChoice.Remove_Item);
            console.log(todo_list);
        }
    }

    // -------------------------- Confirmation ------------------------
    let User_Ans = await inquirer.prompt([{
        type : "confirm",
        name : "Selection",
        message : "Do You Want To Continue ?",
        default : true
    }])
    if(User_Ans.Selection === false){
        while_condition = false;
    }
}

console.log(`Thank You For Using TO-DO List`);