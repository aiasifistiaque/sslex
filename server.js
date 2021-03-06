import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db.js';
import auth from './routes/authRoute.js';
import users from './routes/usersRoute.js';
import productsRoute from './routes/productRoute.js';
import morgan from 'morgan';
import colors from 'colors';
import orderRoute from './routes/orderRoute.js';
import cors from 'cors';
import userRoute from './routes/userRoute.js';
import gatewayRoute from './routes/gatewayRoute.js';

dotenv.config();

connectDB();

const app = express();
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

const corsOptions = {
	origin: '*',
	credentials: true, //access-control-allow-credentials:true
	optionSuccessStatus: 200,
};
app.use(cors());

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
app.use('/api/order', orderRoute);
app.use('/api/profile', userRoute);
app.use('/api/payment', gatewayRoute);

const port = process.env.PORT || 5000;

app.listen(port, console.log(`Server running on port ${port}`.yellow.bold));
