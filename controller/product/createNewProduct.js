import Product from '../../models/productModel.js';
import asyncHandler from 'express-async-handler';

const createNewPorduct = asyncHandler(async (req, res) => {
	//console.log(req);
	try {
		const product = new Product({
			name: req.body.name,
			price: req.body.price,
			user: req.user._id,
			image: req.body.image,
			brand: req.body.brand,
			category: req.body.category,
			countInStock: req.body.countInStock,
			description: req.body.description,
		});
		const created = await product.save();
		res.status(201).json(created);
	} catch (e) {
		res.status(500).json({ msg: e.message });
	}
});

const sampleProduct = {
	name: 'Marks Milk Powder Poly - 200m',
	price: 140,
	user: '604a1d6f7d65687fb569b31c',
	image: 'https://images.pexels.com/photos/3719018/pexels-photo-3719018.jpeg',
	brand: 'Marks',
	category: 'grocery',
	countInStock: 2,
	numReviews: 0,
	description: 'Home delivery inside and outside Dhaka',
};

export default createNewPorduct;
