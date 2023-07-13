const path = require('path');
const express = require('express');
const app = express();
const infoRouter = require('./routes/infoRouter.js');

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// app.get('/', (req, res) => {
//     console.log(path.join(__dirname, '../../build/index.html'));
//     res.sendFile(path.join(__dirname, '../../build/index.html'));
// }); // FUCKING FIX IT 

app.use('/Info', infoRouter);

// catch-all route handler for any requests to an unknown route

app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));

app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 500,
        message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
