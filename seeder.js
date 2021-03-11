import mongoose from 'mongoose';
import dotenv from 'dotenv';
import products from './data/productData.js';
import Product from './models/productModel.js';
import connectDB from './db.js';
import colors from 'colors';

dotenv.config();
connectDB();

const importData = async () => {
	try {
		//await Order.deleteMany();
		await Product.deleteMany();

		const sampleProducts = products.map(product => {
			return { ...product, user: '6049c1ef1ae3d27d7428b88b' };
		});

		await Product.insertMany(sampleProducts);

		console.log('Data Imported!'.green.inverse);
		process.exit();
	} catch (error) {
		console.error(`${error}`.red.inverse);
		process.exit(1);
	}
};

importData();
