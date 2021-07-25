const path = require('path')
const shortid = require('shortid')
const Razorpay = require('razorpay')

const razorpay = new Razorpay({
	key_id: 'rzp_test_J2k9Sh8dP5mkAX',
	key_secret: 'cQ9yNuRz9xfSeLWvQwRK1YZH'
})

server.post('/razorpay/:amount', async (req, res) => {
	const payment_capture = 1
	const amount = req.params.amount
	const currency = 'INR'

	const options = {
		amount: amount * 100,
		currency,
		receipt: shortid.generate(),
		payment_capture
	}

	try {
		const response = await razorpay.orders.create(options)
		console.log(response)
		res.json({
			id: response.id,
			currency: response.currency,
			amount: response.amount,
		})
	} catch (error) {
		console.log(error)
	}
})