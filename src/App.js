import React from 'react'

class Counter extends React.Component {

	render() {
		return (
			<div>
				<Button text="This is me"> </Button>
			</div>
		)
	}
}

class Button extends React.Component {
	state = {
		textflag: false,
	}

	ToggleButton() {
		this.setState(
			{ textflag: !this.state.textflag }
		);
	}

	render() {
		return (
			<div>
				<button onClick={() => this.ToggleButton()}>
					{this.state.textflag === false ? "Hide" : "Show"}
				</button>
				{!this.state.textflag && this.props.text}
			</div>

		)
	}
}

export default Counter;

