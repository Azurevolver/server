// import syntax with commonJS module

const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// rounte handler


var server = app.listen(PORT, function() {
    console.log('Listening on port %d', server.address().port);
});