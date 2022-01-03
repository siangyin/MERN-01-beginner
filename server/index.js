require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;
const connectDB = require("./db/connectDB");

async function start() {
	try {
		await connectDB(process.env.MONGO_URI);
		app.listen(PORT, () => {
			console.log(`Server on ${PORT}...`);
		});
	} catch (err) {
		console.log(err);
	}
}

start();
