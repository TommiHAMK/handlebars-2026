const express = require('express');
const exphbs  = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs.engine({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

// Static files
app.use(express.static('public'));


// Home
app.get('/', (req,res) => {
    res.render('index');
});

// About us
app.get('/about-us', (req,res) => {
    res.render('about-us');
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));