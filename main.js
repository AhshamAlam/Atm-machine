#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 100000;
let pinCode = 1234;
let pinAnswer = await inquirer.prompt({
    name: "pin",
    message: "Enter Your Pin",
    type: "number",
});
if (pinAnswer.pin === pinCode) {
    console.log("Correct pincode");
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            message: "Please Select An Option",
            type: "list",
            choices: ["Withdraw", "Check Balance"],
        },
    ]);
    if (operationAnswer.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Please Select An Option",
                type: "list",
                choices: [1000, 2000, 5000, 10000, "Other"],
            },
        ]);
        if (amountAns.amount === "Other") {
            let otherAmount = await inquirer.prompt([
                {
                    name: "otherAmount",
                    message: "Please Enter Amount",
                    type: "number",
                },
            ]);
            if (myBalance < otherAmount.otherAmount) {
                console.log("Insufficient Balance");
            }
            else {
                myBalance -= otherAmount.otherAmount;
                console.log(`Your Balance Is: ${myBalance}`);
            }
        }
        else if (amountAns.amount === 1000) {
            myBalance -= 1000;
            console.log(`Your Balance Is: ${myBalance}`);
        }
        else if (amountAns.amount === 2000) {
            myBalance -= 2000;
            console.log(`Your Balance Is: ${myBalance}`);
        }
        else if (amountAns.amount === 5000) {
            myBalance -= 5000;
            console.log(`Your Balance Is: ${myBalance}`);
        }
        else if (amountAns.amount === 10000) {
            myBalance -= 10000;
            console.log(`Your Balance Is: ${myBalance}`);
        }
    }
    else if (operationAnswer.operation === "Check Balance") {
        console.log(`Your Balance Is: ${myBalance}`);
    }
}
else {
    console.log("Incorrect Pin Number");
}
