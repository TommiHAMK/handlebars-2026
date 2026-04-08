const express = require('express');
const exphbs  = require('express-handlebars');

// Dummy database

let services = [
    {
        name: 'Spain',
        price: 800
    },
    {
        name: "Belgium",
        price: 400
    }
];



const app = express();

app.engine('handlebars', exphbs.engine({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

// Static files
app.use(express.static('public'));


// Home
app.get('/', (req,res) => {
    res.render('index', {
        title: "Summer Holidays Ltd"        
    });
});

// About us
app.get('/about-us', (req,res) => {
    res.render('about-us', {
        title: "About us - Summer Holidays Ltd"
    });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));