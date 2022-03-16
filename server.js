const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});

const { MongoClient } = require('mongodb');

const dotenv = require('dotenv');

dotenv.config();

const url = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@bookstore-library.pqsap.mongodb.net/bookstore-data?retryWrites=true&w=majority`;

const myDb = 'bookstore-data';

app.get('/express_backend', (req, res) => {
	MongoClient.connect(url, function (err, db) {
		let dbo = db.db(myDb);
		dbo
			.collection('books')
			.find({})
			.toArray(function (err, result) {
				if (err) throw err;
				res.send(result);
			});
	});
});
