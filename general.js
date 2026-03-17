const express = require('express');
const axios = require('axios');
const books = require('./booksdb.js'); // Preloaded book info
const public_users = express.Router();

// Task 1: Get all books
public_users.get('/', async (req, res) => {
    try {
        // Return all books as JSON
        res.json(await Promise.resolve(books));
    } catch (err) {
        res.status(500).json({ message: "Error retrieving books", error: err.message });
    }
});

// Task 2: Get book by ISBN
public_users.get('/isbn/:isbn', async (req, res) => {
    const isbn = req.params.isbn;
    try {
        if (books[isbn]) {
            res.json(await Promise.resolve(books[isbn]));
        } else {
            res.status(404).json({ message: `Book with ISBN ${isbn} not found` });
        }
    } catch (err) {
        res.status(500).json({ message: "Error retrieving book by ISBN", error: err.message });
    }
});

// Task 3: Get books by Author
public_users.get('/author/:author', async (req, res) => {
    const author = req.params.author.toLowerCase();
    try {
        const result = {};
        for (let key of Object.keys(books)) {
            if (books[key].author.toLowerCase() === author) {
                result[key] = books[key];
            }
        }
        if (Object.keys(result).length > 0) {
            res.json(await Promise.resolve(result));
        } else {
            res.status(404).json({ message: `No books found by author ${author}` });
        }
    } catch (err) {
        res.status(500).json({ message: "Error retrieving books by author", error: err.message });
    }
});

// Task 4: Get books by Title
public_users.get('/title/:title', async (req, res) => {
    const title = req.params.title.toLowerCase();
    try {
        const result = {};
        for (let key of Object.keys(books)) {
            if (books[key].title.toLowerCase() === title) {
                result[key] = books[key];
            }
        }
        if (Object.keys(result).length > 0) {
            res.json(await Promise.resolve(result));
        } else {
            res.status(404).json({ message: `No books found with title ${title}` });
        }
    } catch (err) {
        res.status(500).json({ message: "Error retrieving books by title", error: err.message });
    }
});

// Task 5: Get book reviews by ISBN
public_users.get('/review/:isbn', async (req, res) => {
    const isbn = req.params.isbn;
    try {
        if (books[isbn]) {
            res.json(await Promise.resolve(books[isbn].reviews || {}));
        } else {
            res.status(404).json({ message: `Book with ISBN ${isbn} not found` });
        }
    } catch (err) {
        res.status(500).json({ message: "Error retrieving book reviews", error: err.message });
    }
});

module.exports.general = public_users;
