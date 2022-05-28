const connection = require('../connection');

const router = require('express').Router();

router.post('/', function(req, res) {
	const { cin, password } = req.body;

	connection.query('SELECT * FROM users WHERE cin = ? AND password = ? LIMIT 1', [cin, password], function(err, result) {
		if(err) return res.status(400).send(err);

		if(result.length === 0) {
			return res.send('invalid credentials');
		}

		res.send(result[0]);
	})
});

module.exports = router;