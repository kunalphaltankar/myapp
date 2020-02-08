import React from "react";
import "./App.css";

class App extends React.Component {
	state = {
		data: []
	};

	handleClickLeft = () => {
		const data = this.state.data;
		data.push({ img: "left", time: Date() });
		this.setState({ data }, console.log(this.state.data));
	};

	handleClickRight = () => {
		const data = this.state.data;
		data.push({ img: "right", time: Date() });
		this.setState({ data }, console.log(this.state.data));
	};

	render() {
		return (
			<div className="App">
				<div className="left" onClick={this.handleClickLeft}>
					<img
						className="fit"
						src="https://dairycheq.com/images/uploads/qmilk_product.jpg"
					></img>
					<h3>Some data here</h3>
				</div>
				<div className="right" onClick={this.handleClickRight}>
					<img
						className="fit"
						src="https://dairycheq.com/images/uploads/qmilk_product.jpg"
					></img>
					<h3>Some data here</h3>
				</div>
			</div>
		);
	}
}

export default App;
