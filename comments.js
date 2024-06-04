// Create web server which will accept comments from users and display them on the web page.

const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json());

app.get('/comments', (req, res) => {
    fs.readFile(path.join(__dirname, 'comments.json'), 'utf-8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading comments');
            return;
        }

        res.send(data);
    });
});

app.post('/comments', (req, res) => {
    fs.readFile(path.join(__dirname, 'comments.json'), 'utf-8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading comments');
            return;
        }

        const comments = JSON.parse(data);
        comments.push(req.body);

        fs.writeFile(path.join(__dirname, 'comments.json'), JSON.stringify(comments), (err) => {
            if (err) {
                res.status(500).send('Error writing comments');
                return;
            }

            res.send('Comment added');
        });
    });
});

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});