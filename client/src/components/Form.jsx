import { useState } from "react";

const Form = ({ createUser }) => {
	const [username, setUsername] = useState();
	const [email, setEmail] = useState();
	const [image, setImage] = useState();

	return (
		<form className="m-20 space-y-2">
			<label
				for="username"
				className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
			>
				Username
			</label>
			<input
				type="text"
				id="username"
				onChange={(e) => {
					setUsername(e.target.value);
				}}
				className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				placeholder="Please provide username between 3 - 50 characters"
				required
			></input>
			{/*  */}
			<label
				for="email"
				className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
			>
				Your email
			</label>
			<input
				type="email"
				id="email"
				onChange={(e) => {
					setEmail(e.target.value);
				}}
				className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
				placeholder="name@flowbite.com"
				required
			/>

			{/*  */}
			<label
				for="image"
				className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
			>
				Profile Image URL
			</label>
			<input
				type="text"
				id="image"
				onChange={(e) => {
					setImage(e.target.value);
				}}
				className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				placeholder="jpg/jpeg/gif"
				required
			></input>
			<button
				onClick={() => {
					createUser(username, email, image);
				}}
				className="w-1/3 justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-900 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition"
			>
				Add Friend
			</button>
		</form>
	);
};

export default Form;
