const readline = require('readline');
const generateMadLib = require('./MadLibs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function playMadLibs() {
    rl.question("Would you like to provide your own words? (yes/no): ", (answer) => {
        if (answer.toLowerCase() === "yes") {
            rl.question("Enter a noun: ", (noun) => {
                rl.question("Enter a verb: ", (verb) => {
                    rl.question("Enter an adjective: ", (adjective) => {
                        console.log(`The ${adjective} ${noun} decided to ${verb} at the park.`);
                        rl.question("Play again? (yes/no): ", (playAgain) => {
                            if (playAgain.toLowerCase() === "yes") {
                                playMadLibs();
                            } else {
                                console.log("Thanks for playing!");
                                rl.close();
                            }
                        });
                    });
                });
            });
        } else {
            console.log(generateMadLib());
            rl.question("Play again? (yes/no): ", (playAgain) => {
                if (playAgain.toLowerCase() === "yes") {
                    playMadLibs();
                } else {
                    console.log("Thanks for playing!");
                    rl.close();
                }
            });
        }
    });
}

playMadLibs();