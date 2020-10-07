const express = require('express');
const path = require('path')

const app = new express()


app.use(express.static('public'));
app.use(express.static('pages'));

// app.get('/',(req,res) => {
//     //res.sendFile('index.html', { root: path.join(__dirname, '/public/pages') });
//    res.sendFile(path.resolve(__dirname, 'pages/index.html'));
// });

app.get('/',(req, res)) 

app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/about.html'));
});

app.get('/post', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/post.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/contact.html'));
});


app.listen(4000, () => { console.log('App listening on port 4000')})