#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

class Player {
    name: string;
    health: number = 100;
    constructor(name: string) {
        this.name = name;
    }
    decreaseHealth() {
        this.health -= 20;
    }
    restoreHealth() {
        this.health = 100;
    }
}

class Monster {
    name: string;
    health: number = 100;
    constructor(name: string) {
        this.name = name;
    }
    decreaseHealth() {
        this.health -= 20;
    }
}

console.log(chalk.cyan.bold.italic.underline("\t\t***************************** WELCOME TO THE ENCHANTED FOREST ADVENTURE GAME *****************************"));

let player = await inquirer.prompt({
    name: "name",
    type: "input",
    message: chalk.magentaBright.bold("Please Enter Your Name: ")
});

let monster = await inquirer.prompt({
    name: "select",
    type: "list",
    message: chalk.yellowBright.bold("Please Select Your Monster: "),
    choices: ["Dragon", "Troll", "Vampire"]
});

let p1 = new Player(player.name);
let m1 = new Monster(monster.select);
console.log(chalk.greenBright.italic(`\t\t ${p1.name} VS ${m1.name}`));

do {
    if (monster.select == "Dragon") {
        let action = await inquirer.prompt({
            name: "option",
            type: "list",
            message: chalk.blueBright.bold("What Do you Want to do? "),
            choices: ["Attack", "Drink Potion", "Flee"]
        });
        if (action.option == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.decreaseHealth();
                console.log(chalk.redBright.bold(`${p1.name}'s health is ${p1.health}`));
                console.log(chalk.greenBright.bold(`${m1.name}'s health is ${m1.health}`));
                if (p1.health <= 0) {
                    console.log(chalk.red.bold.italic("\t\tYou Lose! Better Luck Next Time"));
                    process.exit();
                }
            } else {
                m1.decreaseHealth();
                console.log(chalk.redBright.bold(`${m1.name}'s health is ${m1.health}`));
                console.log(chalk.greenBright.bold(`${p1.name}'s health is ${p1.health}`));
                if (m1.health <= 0) {
                    console.log(chalk.green.bold.italic("\t\tYou Win!!"));
                    process.exit();
                }
            }
        }
        if (action.option == "Drink Potion") {
            p1.restoreHealth();
            console.log(chalk.gray.bold.italic(`\t\tYou drink a magical potion. Your health is ${p1.health}`));
        }
        if (action.option == "Flee") {
            console.log(chalk.red.bold.italic("\t\tYou Lose! Better Luck Next Time"));
            process.exit();
        }
    }

    if (monster.select == "Troll") {
        let action = await inquirer.prompt({
            name: "option",
            type: "list",
            message: chalk.blueBright.bold("What Do you Want to do? "),
            choices: ["Attack", "Drink Potion", "Flee"]
        });
        if (action.option == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.decreaseHealth();
                console.log(chalk.redBright.bold(`${p1.name}'s health is ${p1.health}`));
                console.log(chalk.greenBright.bold(`${m1.name}'s health is ${m1.health}`));
                if (p1.health <= 0) {
                    console.log(chalk.red.bold.italic("\t\tYou Lose! Better Luck Next Time"));
                    process.exit();
                }
            } else {
                m1.decreaseHealth();
                console.log(chalk.redBright.bold(`${m1.name}'s health is ${m1.health}`));
                console.log(chalk.greenBright.bold(`${p1.name}'s health is ${p1.health}`));
                if (m1.health <= 0) {
                    console.log(chalk.green.bold.italic("\t\tYou Win!!"));
                    process.exit();
                }
            }
        }
        if (action.option == "Drink Potion") {
            p1.restoreHealth();
            console.log(chalk.gray.bold.italic(`\t\tYou drink a magical potion. Your health is ${p1.health}`));
        }
        if (action.option == "Flee") {
            console.log(chalk.red.bold.italic("\t\tYou Lose! Better Luck Next Time"));
            process.exit();
        }
    }

    if (monster.select == "Vampire") {
        let action = await inquirer.prompt({
            name: "option",
            type: "list",
            message: chalk.blueBright.bold("What Do you Want to do? "),
            choices: ["Attack", "Drink Potion", "Flee"]
        });
        if (action.option == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.decreaseHealth();
                console.log(chalk.redBright.bold(`${p1.name}'s health is ${p1.health}`));
                console.log(chalk.greenBright.bold(`${m1.name}'s health is ${m1.health}`));
                if (p1.health <= 0) {
                    console.log(chalk.red.bold.italic("\t\tYou Lose! Better Luck Next Time"));
                    process.exit();
                }
            } else {
                m1.decreaseHealth();
                console.log(chalk.redBright.bold(`${m1.name}'s health is ${m1.health}`));
                console.log(chalk.greenBright.bold(`${p1.name}'s health is ${p1.health}`));
                if (m1.health <= 0) {
                    console.log(chalk.green.bold.italic("\t\tYou Win!!"));
                    process.exit();
                }
            }
        }
        if (action.option == "Drink Potion") {
            p1.restoreHealth();
            console.log(chalk.gray.bold.italic(`\t\tYou drink a magical potion. Your health is ${p1.health}`));
        }
        if (action.option == "Flee") {
            console.log(chalk.red.bold.italic("\t\tYou Lose! Better Luck Next Time"));
            process.exit();
        }
    }
} while (true);
