const readline = require('readline');
const generateMadLib = require('./MadLibs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askForWords(callback) {
    const userWords = {};
    rl.question("Enter a noun: ", (noun) => {
        userWords.noun = noun;
        rl.question("Enter a verb: ", (verb) => {
            userWords.verb = verb;
            rl.question("Enter an adjective: ", (adjective) => {
                userWords.adjective = adjective;
                rl.question("Enter an adverb: ", (adverb) => {
                    userWords.adverb = adverb;
                    rl.question("Enter a plural noun: ", (pluralNoun) => {
                        userWords.pluralNoun = pluralNoun;
                        callback(userWords);
                    });
                });
            });
        });
    });
}

function playMadLibs() {
    rl.question("Would you like to provide your own words? (yes/no): ", (answer) => {
        if (answer.toLowerCase() === "yes") {
            askForWords((userWords) => {
                console.log("\nYour Mad Lib:");
                console.log(generateMadLib(userWords));
                rl.question("\nPlay again? (yes/no): ", (playAgain) => {
                    if (playAgain.toLowerCase() === "yes") {
                        playMadLibs();
                    } else {
                        console.log("Thanks for playing!");
                        rl.close();
                    }
                });
            });
        } else {
            console.log("\nYour Mad Lib:");
            console.log(generateMadLib());
            rl.question("\nPlay again? (yes/no): ", (playAgain) => {
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