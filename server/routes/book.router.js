const express = require('express');
const router = express.Router();

const bookList = [];

//matches /book in server
//everything here is after that /book
// router.get('/book', (req, res) => { --> /book/book
//     res.send(bookList);
// });

// doing just / below is actually /book due to current location
router.get('/', (req, res) => {
    res.send(bookList);
});


//book/add
//router.post('/add', (req, res) => {
    
router.post('/', (req, res) => {
    bookList.push(req.body);
    res.sendStatus(200);
});

module.exports = router;