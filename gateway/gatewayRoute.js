export default function paymentRequest() {
	// Default options are marked with *
	fetch('https://sandbox.sslcommerz.com/gwprocess/v4/api.php', {
		method: 'POST', // *GET, POST, PUT, DELETE, etc.
		mode: 'cors', // no-cors, cors, *same-origin
		cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		credentials: 'same-origin', // include, *same-origin, omit
		redirect: 'follow', // manual, *follow, error
		referrer: 'no-referrer', // no-referrer, *client
		body: 'this.data', // body data type must match "Content-Type" header
	})
		.then(res => res.json())
		.then(res => {
			console.log('new payment request initiaged', res);
			return res;
		})
		.catch(err => console.log(err));
}
