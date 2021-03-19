//
import FormData from 'form-data';

const sslObject = req => {
	let post_body = {};
	post_body['store_id'] = 'ciphe605213e44eacb'; //string
	post_body['store_passwd'] = 'ciphe605213e44eacb@ssl'; //string
	post_body['total_amount'] = req.body.totalPrice; //decimal
	post_body['currency'] = 'BDT'; //string
	post_body['tran_id'] = req.body.transactionId; //string
	post_body['product_category'] = 'electronics'; //string
	post_body['success_url'] = `${process.env.FRONTEND_ROUTE}/orderplaced`; //string
	post_body['fail_url'] = `${process.env.FRONTEND_ROUTE}/ordercanceled`; //string
	post_body['cancel_url'] = `${process.env.FRONTEND_ROUTE}/ordercanceled`; //string
	post_body['emi_option'] = 0; //int 0 or 1

	//customer
	post_body['cus_name'] = req.user.name; //string
	post_body['cus_email'] = 'asifistiaque.ai@gmail.com'; //string
	post_body['cus_add1'] = req.body.address; //string
	post_body['cus_city'] = req.body.city; //string
	post_body['cus_postcode'] = req.body.postalCode; //string
	post_body['cus_country'] = 'Bangladesh'; //string
	post_body['cus_phone'] = '01828398225'; //string

	//shipment
	post_body['shipping_method'] = 'No'; //string yes/no/courier
	post_body['num_of_item'] = 5; //int

	/* Product Information */
	//required
	post_body['product_name'] = 'Tv,Phone'; //string
	post_body['product_category'] = 'electronics'; //string
	post_body['product_profile'] = '1. general'; //string

	let fdata = new FormData();
	for (const a in post_body) {
		fdata.append(a, post_body[a] ? post_body[a] : '');
	}

	//console.log('fdata', fdata);

	return fdata;
};

export default sslObject;

//

export const sslObjectCopy = data => {
	const store_id = data.store_id;
	const store_passwd = data.store_passwd;
	const total_amount = data.total_amount;
	const currency = data.currency;
	const tran_id = data.tran_id;
	const product_category = data.product_category;
	const success_url = data.success_url;
	const fail_url = data.fail_url;
	const cancel_url = data.cancel_url;
	const emi_option = 0;

	//customer
	const cus_name = data.cus_name;
	const cus_email = data.cus_email;
	const cus_add1 = data.cus_add1;
	const cus_add2 = data.cus_add2;
	const cus_city = data.cus_city;
	const cus_state = data.cus_state;
	const cus_postcode = data.cus_postcode;
	const cus_country = data.cus_country;
	const cus_phone = data.cus_phone;

	//shipment
	const shipping_method = data.shipping_method;
	const num_of_item = data.num_of_item;

	/* Product Information */
	//required
	const product_name = data.product_name;
	//const product_category = data.product_category;
	const product_profile = data.product_profile;
};

export const sslObject2 = data => {
	let post_body = {};
	post_body['store_id'] = data.store_id;
	post_body['store_passwd'] = data.store_passwd;
	post_body['total_amount'] = data.total_amount;
	post_body['currency'] = data.currency;
	post_body['tran_id'] = data.tran_id;
	post_body['product_category'] = data.product_category;
	post_body['success_url'] = data.success_url;
	post_body['fail_url'] = data.fail_url;
	post_body['cancel_url'] = data.cancel_url;
	post_body['emi_option'] = 0;

	//customer
	post_body['cus_name'] = data.cus_name;
	post_body['cus_email'] = data.cus_email;
	post_body['cus_add1'] = data.cus_add1;
	post_body['cus_add2'] = data.cus_add2;
	post_body['cus_city'] = data.cus_city;
	post_body['cus_state'] = data.cus_state;
	post_body['cus_postcode'] = data.cus_postcode;
	post_body['cus_country'] = data.cus_country;
	post_body['cus_phone'] = data.cus_phone;

	//shipment
	post_body['shipping_method'] = data.shipping_method;
	post_body['num_of_item'] = data.num_of_item;

	/* Product Information */
	//required
	post_body['product_name'] = data.product_name;
	post_body['product_category'] = data.product_category;
	post_body['product_profile'] = data.product_profile;

	return post_body;
};
