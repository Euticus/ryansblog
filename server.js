const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const db = require('./db');

db.query('SELECT * FROM posts', (err, res) => {
    if(err) {
        console.error(err);
    } else {
        console.log(res.rows);
    }
});


app.listen(port, () => console.log(`Server started on port ${port}`));
