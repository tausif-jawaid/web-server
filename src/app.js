const path = require('path');
const express = require('express');
const hbs = require('hbs');


// console.log(__dirname);
// console.log(path.join(__dirname, '../public'));

const app = express();

// Define path for express engine
const publicDirectoryPath = path.join(__dirname, '../public');
const viewDirectoryPath = path.join(__dirname,'../templates/views');
const partialPath = path.join(__dirname,'../templates/partials');


// Setup handlebar engine and views location
app.set('view engine', 'hbs');
app.set('views',viewDirectoryPath);
hbs.registerPartials(partialPath);

//  Setup static directory to serve
app.use(express.static(publicDirectoryPath));


app.get('', (req,res) => {
    res.render('index', {
        title : 'weather app',
        name : 'Tausif'
    });
})

app.get('/about', (req,res) => {
    res.render('about', {
        title : 'about',
        name : 'Tausif'
    })
});

app.get('/help', (req,res) => {
    res.render('help', {
        title : 'Help',
        name : 'Tausif',
        textHelp : 'This text is helpfull for User'
    })
})

app.get('/weather', (req,res) => {
 
    if (!req.query.address) {
        return res.send({
            error : 'Please provide search item'
        })
    }
    res.send({
        address : req.query.address
    });
});

app.get('/products', (req,res) => {
    if (!req.query.search){
        return res.send({
            error : 'you must provide a search term'
        })
    }
     res.send({
         product : []
     })
})

app.get('/help/*', (req,res) => {
    res.render('404', {
        title : '404',
        name : 'Tausif',
        errorMessage : 'Help Article not found'
    })
 })

app.get('*', (req,res) => {
    res.render('404', {
        title : '404',
        name : 'Tausif',
        errorMessage : 'Page not Found!'
    })
});



app.listen(3000, () => {
    console.log('Server is up on port 3000!');
})