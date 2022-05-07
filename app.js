const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/user');

// connect to mongodb
const dbURI = 'mongodb+srv://user:password@nodetest.woyzf.mongodb.net/testdb?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));


// Enables views to use files under public directory
app.use(express.static('public'));

// set view engine
app.set('view engine', 'ejs');

// app.get('/new-user', (req, res) => {
//     const user = new User({

//     });

//     user.save()
//         .then((result) => {

//         }).catch((err) => console.log(err));
// });


app.get('/', (req, res) => {
    res.render('index', { title: 'Embiggen Expert Network' });
});

app.get('/dashboard', (req, res) => {
    res.render('dashboard', { title: 'Dashboard' })
});

// Redirect example
app.get('/index.html', (req, res) => {
    res.redirect('/');
});

// 404 Page
app.use((req, res) => {
    res.status(404).render('404')
});