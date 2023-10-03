const express = require("express");
const router = express.Router();


router.get('/', (req, res) => {
    try {
        res.status(200).send('Hello World!');
    } catch (error) {
        res.status(401).send('There is One error ');
    }
});


router.get('/api/:id', (req, res) => {
    try {
        console.log(req.params);
        res.status(200).send('Hello World!');
    } catch (error) {
        res.status(401).send('There is One error ');
    }
});



module.exports = router
