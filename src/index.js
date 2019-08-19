import React, { Component } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

class BMRCalculator extends Component {
	constructor(props) {
		super(props);
		this.state = {
			feet: 0,
			inches: 0,
			pounds: 0,
			gender: "male",
			age: 0,
			activityLevel: null,
			finalBMR: 0
		};
	}

	handleSubmit(e) {
		e.preventDefault();
		console.log(this.state);
		let bmr = this.calculateBMR();
		this.setState({ finalBMR: bmr });
	}

	handleChange(e) {
		let target = e.target;
		let newState = {
			[target.name]: target.value
		};
		this.setState(Object.assign({}, this.state, newState));
	}

	calculateBMR() {
		const INCHES_TO_CENTIMETERS_QUANTIFIER = 2.54;
		const POUNDS_TO_KILOGRAMS_QUANTIFIER = 2.2;
		const NUM_INCHES_IN_A_FOOT = 12;

		let bmrFinal = null;
		let heightInCentimeters =
			(+this.state.feet * NUM_INCHES_IN_A_FOOT + +this.state.inches) *
			INCHES_TO_CENTIMETERS_QUANTIFIER;
		let weightInKilograms = Number.prototype.toFixed.call(
			+this.state.pounds / POUNDS_TO_KILOGRAMS_QUANTIFIER,
			2
		);

		let genderNeutralBase =
			heightInCentimeters * 6.25 + weightInKilograms * 9.99 - +this.state.age * 4.92;

		if (this.state.gender === "M") {
			bmrFinal = Math.round(genderNeutralBase + 5);
		} else {
			bmrFinal = Math.round(genderNeutralBase - 161);
		}

		bmrFinal = bmrFinal * +this.state.activityLevel;
		return bmrFinal;
	}

	render() {
		return (
			<div class='container'>
				<form onSubmit={e => this.handleSubmit(e)}>
					<br />
					<h2 class='text-center'>Health Adviser</h2>
					<div class='form-group'>
						<label htmlFor='weight'>Food Calorie Units </label>
						<input
							class='form-control'
							type='number'
							name='pounds'
							id='pounds'
							required
							onChange={e => this.handleChange(e)}
						/>
					</div>

					<div class='form-group'>
						<label>Exercise</label>
						<select
							class='form-control'
							name='activityLevel'
							id='activityLevel'
							onChange={e => this.handleChange(e)}
						>
							<option value='3.5'>Walking</option>
							<option value='283'>Kayaking</option>
							<option value='289'>Softball/Baseball </option>
							<option value='397'>Swimming (free-style, moderate) </option>
							<option value='397'>Tennis (general) </option>
							<option value='624'>Running (9 minute mile) </option>
							<option value='454'>Bicycling (12-14 mph, moderate) </option>
							<option value='399'>Football (general) </option>
							<option value='340'>Basketball (general) </option>
						</select>
					</div>
					<div>
						<br />
						<input class='btn btn-primary' type='submit' value='Submit' />
					</div>
				</form>
				<h5 class='text-center'>Calorie Burned: {this.state.finalBMR}</h5>
			</div>
		);
	}
}

function App() {
	return (
		<div className='App'>
			<BMRCalculator />
		</div>
	);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
