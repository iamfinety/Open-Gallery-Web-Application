const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/exhibition-space";

const connectToMongoose = () => {
	mongoose.connect(url, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});

	const db = mongoose.connection;

	db.on("error", () => {
		console.log("connection error");
	});

	db.on("open", () => {
		console.log("connect to mongodb !");
	});
};

module.exports = connectToMongoose;
