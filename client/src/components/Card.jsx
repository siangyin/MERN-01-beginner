import React from "react";
import { FaEllipsisV } from "react-icons/fa";

const Card = (props) => {
	return (
		<div className=" bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
			<div className="flex justify-end px-4 pt-4">
				<button
					id="dropdownButton"
					data-dropdown-toggle="dropdown"
					className="hidden sm:inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
					type="button"
				>
					<FaEllipsisV />
				</button>
				{/* <!-- Dropdown menu --> */}
				<div
					id="dropdown"
					className="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
				>
					<ul className="py-1" aria-labelledby="dropdownButton">
						<li>
							<a
								href="#"
								className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
							>
								Edit
							</a>
						</li>

						<li>
							<a
								href="#"
								className="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
							>
								Delete
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="flex flex-col items-center p-5">
				<img
					className="mb-3 w-24 h-24 rounded-full shadow-lg"
					src={props.image}
					alt={props.username}
				/>
				<h3 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
					{props.username}
				</h3>
				<span className="text-sm text-gray-500 dark:text-gray-400 mb-1">
					{props.email}
				</span>
				<div className="inline-flex">
					<a
						href="#"
						className=" bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
					>
						Add friend
					</a>
					<a
						href="#"
						className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
					>
						Message
					</a>
				</div>
			</div>
		</div>
	);
};

export default Card;
