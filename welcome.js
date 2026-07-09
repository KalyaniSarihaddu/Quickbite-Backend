import chalk from "chalk";

function showMessage() {
    console.log(chalk.green("QuickBite Backend is Ready!"));
    console.log(chalk.green("Current Date and Time:"));
    console.log(chalk.green(new Date().toLocaleString()));
}

showMessage();