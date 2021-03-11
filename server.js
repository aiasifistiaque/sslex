import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db.js';
import auth from './routes/authRoute.js';
import users from './routes/usersRoute.js';
import productsRoute from './routes/productRoute.js';
import morgan from 'morgan';
import colors from 'colors';

dotenv.config();

connectDB();

const app = express();
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	next();
});

//routes
app.use('/api/register', users);
app.use('/api/login', auth);
app.use('/api/products', productsRoute);

const port = process.env.PORT || 5000;

app.listen(port, console.log(`Server running on port ${port}`.yellow.bold));
