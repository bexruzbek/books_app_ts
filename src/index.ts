import express from 'express';
import path from 'path';
import exphbs from 'express-handlebars';

// Importing Routes
import indexRoutes from './routes/index';
import booksRoutes from './routes/books';

// Initialization
const app = express();
import './database';

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
  extname: '.hbs',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  helpers: require('./lib/helpers'),
}));
app.set('view engine', '.hbs');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use('/', indexRoutes);
app.use('/books', booksRoutes);

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

// Starting the server
app.listen(app.get('port'), ()=>{
  console.log(`Server running on port ${app.get('port')}`)
});