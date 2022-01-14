//create the main route
const express = require('express');
const router = express.Router();

//define the main route from de webpage
router.get('/', (request, response) => {
    response.send('My webpage');
});

//export the module
module.exports = router;