import "./App.css";
import { useState, useEffect } from "react";
// import ReactDOM from "react-dom";
import Axios from "axios";
import Card from "./components/Card";
import Form from "./components/Form";

function App() {
	const [userList, setUserList] = useState([
		{
			_id: 1,
			username: "yippyy",
			email: "yippyy@test.com",
			image:
				"https://i.pinimg.com/originals/9a/47/5c/9a475cfc083a5b8654e85a4d04af8044.gif",
		},
	]);

	const createUser = (username, email, image) => {
		Axios.post("http://localhost:3030/createUser", {
			username,
			email,
			image,
		}).then((res) => alert("success"));
	};

	useEffect(() => {
		Axios.get("http://localhost:3030/getUsers").then((res) => {
			setUserList(res.data);
		});
	}, [userList]);

	return (
		<div className="App">
			<h1 className="w-full block flex-grow text-center text-3xl font-bold mt-10">
				FriendBook
			</h1>

			<Form createUser={createUser} />

			<div className="usersDisplay flex justify-center flex-wrap space-x-4">
				{userList.map((user) => {
					return (
						<Card
							className=""
							key={user._id}
							username={user.username}
							email={user.email}
							image={user.image}
						/>
					);
				})}
			</div>

			{/* card containers */}
		</div>
	);
}

export default App;
