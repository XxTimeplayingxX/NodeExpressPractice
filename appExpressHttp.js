const express = require('express');

const app = express();

app.use((req, res, next)=>{
    res.send('<h1>Hola Estudiantes!</h1>');
});

app.listen(5001);