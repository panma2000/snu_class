const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

app.use(express.static(path.join(__dirname,'docs')));

app.get('/', (req,res) => {
    // res.send('Hello world!');
    res.sendFile(path.join(__dirname,'docs', 'index.html'));
});

app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}');
    console.log('http://localhost:3000');
});