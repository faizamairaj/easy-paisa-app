import inquirer from "inquirer";
import chalk from "chalk";
//Start the app
console.log(chalk.bold.italic.yellowBright("**********************************************"));
console.log(chalk.bold.italic.magentaBright("        Welcome to easy Paisa APP!         "));
console.log(chalk.bold.italic.yellowBright("***********************************************"));
let balance = 500000;
let myPin = 2244;
let condition = true;
while (condition) {
    let pinAnswer = await inquirer.prompt([
        {
            type: "number",
            name: "pin",
            message: "Enter Your pin code!"
        }
    ]);
    if (pinAnswer.pin === myPin) {
        console.log("Correct PIN code");
        let answers = await inquirer.prompt([
            {
                type: "list",
                name: "options",
                message: "Select the option",
                choices: ["Sendbalance", "Checkbalance", "Load Mobile balance"]
            }
        ]);
        if (answers.options === "Sendbalance") {
            let amount = await inquirer.prompt([
                {
                    type: "number",
                    name: "amount1",
                    message: "Enter the amount to send"
                }
            ]);
            if (balance > amount.amount1) {
                balance -= amount.amount1;
                console.log(chalk.bold.italic.yellowBright(`Your remaining amount is ${balance})`));
            }
        }
        else if (answers.options === "Checkbalance") {
            console.log(chalk.bold.italic.greenBright(`Your balance is ${balance})`));
        }
        else if (answers.options === "Load Mobile balance") {
            let mobbalance = await inquirer.prompt([
                {
                    type: "number",
                    name: "mobilebalance",
                    message: "Enter the amount to load mobile balance"
                }
            ]);
            if (balance > mobbalance.mobilebalance) {
                balance -= mobbalance.mobilebalance;
                console.log(chalk.bold.italic.redBright(`Your Mobile Balance has been recharged. Your recharged amount is ${mobbalance.mobilebalance}`));
            }
        }
    }
    else {
        console.log("Wrong Pin code");
    }
    let answers2 = await inquirer.prompt([
        {
            type: "confirm",
            name: "tryagain",
            message: "Do you want to continue. If yes Press 'y' else 'n'",
            default: "false"
        }
    ]);
    condition = answers2.tryagain;
}
console.log(chalk.bold.italic.yellowBright("*********************************************************************"));
console.log(chalk.bold.magentaBright("            Thanks for using this App Good Bye!                       "));
console.log(chalk.bold.italic.yellowBright("************************************************************************"));
