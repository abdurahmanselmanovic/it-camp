import React, { useState } from "react";
import "./Brojac.css";

const Brojac = () => {
	const [counter, setCounter] = useState(0);

	const handleClickIncrement = () => {
		setCounter(counter + 1);
	};

	const handleClickDecrement = () => {
		if (counter <= 0) {
			return counter;
		}
		setCounter(counter - 1);
	};

	return (
		<div>
			<h1>COUNTER</h1>
			<div>
				<p>{counter}</p>
			</div>
			<div className="buttons">
				<button onClick={handleClickIncrement}>Increment + </button>
				<button onClick={handleClickDecrement}>Decrement - </button>
			</div>
		</div>
	);
};

export default Brojac;
