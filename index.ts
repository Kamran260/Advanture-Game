import inquirer from "inquirer";

class player{
    name:string;
    fuel:number = 100;
    constructor(name:string){
        this.name = name
    }
    fuelDecrease(){
        let energy = this.fuel -25;
        this.fuel = energy

    }
    fuelIncrease(){
        this.fuel = 100;
    }
}

class opponent{
    name:string;
    fuel:number=100;
    constructor(name:string){
        this.name = name
    }
    fuelDecrease(){
        let energy = this.fuel -25;
        this.fuel = energy

    }
}

let player1 = await inquirer.prompt([{
    name: 'player',
    type: "input",
    message: "Enter your name"

}])

let opponent1 = await inquirer.prompt([{
    name: "opponent",
    type: "list",
    message: "Choose your opponent",
    choices:["Skeleton", "Alein", "Zombies"]
}])

let p1 = new player(player1.player);
let o1 = new opponent(opponent1.opponent);


do {
    if(opponent1.opponent == "Skeleton"){
        let ask = await inquirer.prompt([{
            name: "options",
            type: "list",
            message: "What would you like to do?",
            choices:["Attack", "Fueling yourself", "Go Back and save your life"]
        }])

        if(ask.options == "Attack"){
            let num = Math.floor(Math.random()*2);
            if(num > 0){
                p1.fuelDecrease()
                console.log(`${p1.name}, your fuel is ${p1.fuel} \n ${o1.name}, your fuel is ${o1.fuel} `);
                if(p1.fuel == 0){
                    console.log(`${p1.name}, you loss the game`);
                    process.exit();
                }
            }
            if(num <= 0){
                o1.fuelDecrease()
                console.log(`${p1.name}, your fuel is ${p1.fuel} \n ${o1.name}, your fuel is ${o1.fuel} `);
                if(o1.fuel == 0){
                    console.log(`${o1.name}, loss the game. You Wins`);
                    process.exit();
                }
            }
        }

        if(ask.options == "Fueling yourself"){
            p1.fuelIncrease()
            console.log(`${p1.name} your energy is now ${p1.fuel}`);

        }

        if(ask.options == "Go Back and save your life"){

            console.log(`${p1.name} your surrendered yourself`);
            process.exit()

        }
    }

    // Allien
    if(opponent1.opponent == "Alein"){
        let ask = await inquirer.prompt([{
            name: "options",
            type: "list",
            message: "What would you like to do?",
            choices:["Attack", "Fueling yourself", "Go Back and save your life"]
        }])

        if(ask.options == "Attack"){
            let num = Math.floor(Math.random()*2);
            if(num > 0){
                p1.fuelDecrease()
                console.log(`${p1.name}, your fuel is ${p1.fuel} \n ${o1.name}, your fuel is ${o1.fuel} `);
                if(p1.fuel == 0){
                    console.log(`${p1.name}, you loss the game`);
                    process.exit();
                }
            }
            if(num <= 0){
                o1.fuelDecrease()
                console.log(`${p1.name}, your fuel is ${p1.fuel} \n ${o1.name}, your fuel is ${o1.fuel} `);
                if(o1.fuel == 0){
                    console.log(`${o1.name}, loss the game. You Wins`);
                    process.exit();
                }
            }
        }

        if(ask.options == "Fueling yourself"){
            p1.fuelIncrease()
            console.log(`${p1.name} your energy is now ${p1.fuel}`);

        }

        if(ask.options == "Go Back and save your life"){

            console.log(`${p1.name} your surrendered yourself`);
            process.exit()

        }
    }


    // Zombies
    if(opponent1.opponent == "Zombies"){
        let ask = await inquirer.prompt([{
            name: "options",
            type: "list",
            message: "What would you like to do?",
            choices:["Attack", "Fueling yourself", "Go Back and save your life"]
        }])

        if(ask.options == "Attack"){
            let num = Math.floor(Math.random()*2);
            if(num > 0){
                p1.fuelDecrease()
                console.log(`${p1.name}, your fuel is ${p1.fuel} \n ${o1.name}, your fuel is ${o1.fuel} `);
                if(p1.fuel == 0){
                    console.log(`${p1.name}, you loss the game`);
                    process.exit();
                }
            }
            if(num <= 0){
                o1.fuelDecrease()
                console.log(`${p1.name}, your fuel is ${p1.fuel} \n ${o1.name}, your fuel is ${o1.fuel} `);
                if(o1.fuel == 0){
                    console.log(`${o1.name}, loss the game. You Wins`);
                    process.exit();
                }
            }
        }

        if(ask.options == "Fueling yourself"){
            p1.fuelIncrease()
            console.log(`${p1.name} your energy is now ${p1.fuel}`);

        }

        if(ask.options == "Go Back and save your life"){

            console.log(`${p1.name} your surrendered yourself`);
            process.exit()

        }
    }
    
} while (true);