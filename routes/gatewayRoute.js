import express from 'express';
import fetch from 'node-fetch';
import sslObject from '../gateway/sslObject.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

router.post('/', protect, (req, res) => {
	const post_body = {
		store_id: 'ciphe605213e44eacb',
		store_passwd: 'ciphe605213e44eacb@ssl',
		total_amount: 100,
		currency: 'BDT',
		tran_id: 'iamawesomealkfja912038910',
		product_category: 'electronics',
		success_url: 'ciphertext.live/payment/success',
		fail_url: 'ciphertext.live/payment/fail',
		cancel_url: 'ciphertext.live/payment/cancel',
		emi_option: 0,
		cus_name: 'Asif Istiaque',
		cus_email: 'asifistiaque.ai@gmail.com',
		cus_add1: '4/11 Hymayun Road',
		cus_city: 'Dhaka',
		cus_postcode: '1207',
		cus_country: 'Bangladesh',
		cus_phone: '01828398225',
		shipping_method: 'courier',
		num_of_item: 5,
		product_name: 'Tv,Phone',
		product_profile: '1. general',
	};

	const data = sslObject(req);

	fetch('https://sandbox.sslcommerz.com/gwprocess/v4/api.php', {
		method: 'POST', // *GET, POST, PUT, DELETE, etc.
		mode: 'cors', // no-cors, cors, *same-origin
		cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		credentials: 'same-origin', // include, *same-origin, omit
		redirect: 'follow', // manual, *follow, error
		referrer: 'no-referrer', // no-referrer, *client
		body: data, // body data type must match "Content-Type" header
	})
		.then(response => response.json())
		.then(response => {
			res.status(200).json(response);
		})
		.catch(err => {
			console.log(err);
			res.status(500).json(err);
		});
});

export default router;
