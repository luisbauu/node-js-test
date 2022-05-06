const express = require('express');
const app = express();

//  localhost port
app.listen(3000);

// Enables views to use files under public directory
app.use(express.static("public"));

// set view engine
app.set('view engine', 'ejs');


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