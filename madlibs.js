const fs = require('fs');

// Load templates and words from JSON files
const templates = JSON.parse(fs.readFileSync('./templates.json', 'utf8'));
const words = JSON.parse(fs.readFileSync('./words.json', 'utf8'));

// Function to get a random word from a category
function getRandomWord(category) {
    const wordList = words[category];
    return wordList[Math.floor(Math.random() * wordList.length)];
}

// Function to generate a random Mad Lib
function generateMadLib() {
    // Select a random template
    const template = templates[Math.floor(Math.random() * templates.length)];

    // Replace placeholders with random words
    const madLib = template
        .replace("{noun}", getRandomWord("nouns"))
        .replace("{verb}", getRandomWord("verbs"))
        .replace("{adjective}", getRandomWord("adjectives"))
        .replace("{adverb}", getRandomWord("adverbs"))
        .replace("{pluralNoun}", getRandomWord("pluralNouns"));

    return madLib;
}

module.exports = generateMadLib;