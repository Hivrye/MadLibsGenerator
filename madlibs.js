const fs = require('fs');

// Load templates and words from JSON files
const templates = JSON.parse(fs.readFileSync('./templates.json', 'utf8'));
const words = JSON.parse(fs.readFileSync('./words.json', 'utf8'));

// Function to get a random word from a category
function getRandomWord(category) {
    const wordList = words[category];
    return wordList[Math.floor(Math.random() * wordList.length)];
}

// Function to replace placeholders with user-provided or random words
function fillTemplate(template, userWords = {}) {
    return template
        .replace("{noun}", userWords.noun || getRandomWord("nouns"))
        .replace("{verb}", userWords.verb || getRandomWord("verbs"))
        .replace("{adjective}", userWords.adjective || getRandomWord("adjectives"))
        .replace("{adverb}", userWords.adverb || getRandomWord("adverbs"))
        .replace("{pluralNoun}", userWords.pluralNoun || getRandomWord("pluralNouns"));
}

// Function to generate a random Mad Lib
function generateMadLib(userWords = {}) {
    // Select a random template
    const template = templates[Math.floor(Math.random() * templates.length)];

    // Fill the template with words
    return fillTemplate(template, userWords);
}

module.exports = generateMadLib;