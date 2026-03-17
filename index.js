const natural = require('natural'); // <-- required import

// Example sentiment analysis setup
const Analyzer = natural.SentimentAnalyzer;
const stemmer = natural.PorterStemmer;
const analyzer = new Analyzer("English", stemmer, "afinn");

function analyzeSentiment(text) {
    const score = analyzer.getSentiment(text.split(" "));
    return score;
}

module.exports = {
    analyzeSentiment,
};
