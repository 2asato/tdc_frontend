const express = require('express');
const app = express();
const PORT = 2000;

app.use(express.static('public'));

app.listen(PORT, () => console.log('p5 frontend, port: ', PORT));
