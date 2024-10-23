const express = require('express');
const path = require('path'); // Import the path module
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    // Use path.join to create the correct file path
    res.sendFile(path.join(__dirname, 'front', 'html', 'index.html'));
});

app.listen(port, (err) => {
    if (err) {
        console.error(`Failed to start server: ${err.message}`);
        return;
    }
    console.log(`Now listening on port ${port}, http://localhost:${port}/`);
});
