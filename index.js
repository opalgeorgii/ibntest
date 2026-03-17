// Import the 'natural' package
const natural = require('natural');

// Example function using natural
function analyzeSentiment(text) {
    const tokenizer = new natural.WordTokenizer();
    const words = tokenizer.tokenize(text);
    return words;
}

module.exports = { analyzeSentiment };
