const express = require('express');
const exphbs  = require('express-handlebars');

// Dummy database
let services = [
    {
        name: 'Spain',
        price: 800,
        image: 'spain.jpg'
    },
    {
        name: "Belgium",
        price: 400,
        image: 'belgium.avif'
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

// Services
app.get('/services', (req,res) => {
    res.render('services', {
        title: "Our holiday trips",
        services: services,  // shortened way: services
        itemsTotal: services.length,
    });
});


//Page not found 404
app.use((req,res,next) => {
    res.status(404).send('Sorry, page not found. <a href="/">Home</a>');
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));