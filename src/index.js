// Declaration
const express = require('express');             //webserver
const morgan = require('morgan');               //middleware
const path = require('path');                   //framework path para detectar la ubicación de carpetas dentro de proyecto
const { engine } = require('express-handlebars');// engine

//Initializations
const app = express();


//settings: ports and some routes
app.set('port', process.env.PORT || 4000);                      // define ports
//engine settings
app.set('views', path.join(__dirname, 'views'));                // define views route
app.set('layouts', path.join(app.get('views'), 'shared/layouts'));     // define layouts route
app.set('partials', path.join(app.get('views'),'shared/partials'));   // define partial route
app.set('public', path.join(__dirname, 'public'));

//define engine settings
app.engine('handlebars', engine({
    defaultLayout: "main", //main file
    layoutsDir: app.get('layouts'), //layout file
    partialsDir: app.get('partials'), //partial file
    extname: '.handlebars',  //extension name
    helpers: require('./lib/handlebars'), //helper files located on lib folder
}));
app.set('view engine', 'handlebars');


//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Global variables
app.use((request, response, next) => {
    next();
});

//Routes
app.use(require('./routes/main'));
app.use(require('./routes/authentication'));

//controllers
app.use('/MovExt', require('./routes/MovExt'));

//Public Files
app.use(express.static(app.get('public')));





//Starting server
//executing using 'npm run dev' code by nodemon
app.listen(app.get('port'), () => {
    console.log(`Server online on port ${app.get('port')} `);
    console.log(`Server online views file ${app.get('views')} `);
    console.log(`Server online layouts file ${app.get('layouts')} `);
    console.log(`Server online on partials file ${app.get('partials')} `);
    //console.log(`Server online on public file ${app.get('public')} `);
});


