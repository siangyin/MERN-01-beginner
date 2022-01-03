require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;
const connectDB = require("./db/connectDB");
const UserModel = require("./models/Users");

app.use(express.json());

app.get("/getUsers", async (req, res) => {
	const users = await UserModel.find({});
	res.status(200).json(users);
});

app.post("/createUser", async (req, res) => {
	try {
		const user = req.body;
		const newUser = await UserModel.create(user);
		res.status(200).json(newUser);
	} catch (error) {
		console.log(error);
	}
});

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
