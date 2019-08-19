import React from "react";
import styles from "./style.module.css";

class NameForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			flavor: "mango",
			essay: "",
			empty: []
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });
		console.log(this.state);
	}

	handleSubmit(event) {
		event.preventDefault();
		console.log(`A name was submitted: ${this.state.name}
          An essay was submitted: ${this.state.essay}
          Your favourite flavor is: ${this.state.flavor} `);
	}

	render() {
		return (
			<center>
				<div className={styles.wrapper}>
					<section />
					<section />
					<form onSubmit={this.handleSubmit}>
						<br />
						<select
							className={styles.select}
							value={this.state.flavor}
							name='flavor'
							onChange={this.handleChange}
						>
							<option value='grapefruit'>Grapefruit</option>
							<option value='lime'>Lime</option>
							<option value='coconut'>Coconut</option>
							<option value='mango'>Mango</option>
						</select>

						<input
							className={styles.input}
							type='text'
							value={this.state.name}
							name='name'
							onChange={this.handleChange}
						/>
						<br />
						<select value={this.state.flavor} name='flavor' onChange={this.handleChange}>
							<option value='grapefruit'>Grapefruit</option>
							<option value='lime'>Lime</option>
							<option value='coconut'>Coconut</option>
							<option value='mango'>Mango</option>
						</select>
						<input value={this.state.essay} name='essay' onChange={this.handleChange} />
						<br />
						<input className={styles.sumbitbtn} type='submit' value='Submit' />
					</form>
				</div>
			</center>
		);
	}
}

export default NameForm;
