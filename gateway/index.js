//ssl payment gateway config

const store_id = 'ciphe605213e44eacb';
const store_passwd = '03sep1991aA';
const total_amount = 999.99;
const currency = 'BDT';
let tran_id = '';
const product_category = 'electornics';
const success_url = '';
const fail_url = '';
const cancel_url = '';
const emi_option = 0;

const storeSession = {
	store_id: '',
	store_passwd: '',
	total_amount: '',
	currency: '',
	tran_id: '',
	product_category: '',
	success_url: '',
	fail_url: '',
	cancel_url: '',
	emi_option: '',
};

const customer = {
	cus_name: '',
	cus_email: '',
	cus_add1: '', //address
	cus_city: '',
	cus_postcode: '',
	cus_country: '',
	cus_phone: '',
};

const shipping = {
	shipping_method: '',
	num_of_item: '',
};

const productInfo = {
	product_name: '',
	product_category: '',
	product_profile: '',
};

function sslCommarzCall() {
	// Default options are marked with *
	return fetch('https://sandbox.sslcommerz.com/gwprocess/v4/api.php', {
		method: 'POST', // *GET, POST, PUT, DELETE, etc.
		mode: 'cors', // no-cors, cors, *same-origin
		cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		credentials: 'same-origin', // include, *same-origin, omit
		redirect: 'follow', // manual, *follow, error
		referrer: 'no-referrer', // no-referrer, *client
		body: 'this.data', // body data type must match "Content-Type" header
	})
		.then(res => res.json())
		.then(res => console.log(res))
		.catch(err => console.log(err));
}
