import React from "react";
import "./App.css";
import moment from "moment";

class App extends React.Component {
	state = {
		words: ["Good", "bad", "Kunal"],
		info: [],
		count: 0,
		startTime: 0,
		endTime: 0,
		finished: false
	};

	componentDidMount() {
		this.setState({ count: this.state.words.length - 1 });
	}

	handleClick = leftOrRight => {
		if (
			this.state.words[1] === this.state.words[this.state.count] &&
			leftOrRight === "left"
		)
			return;

		if (this.state.finished) return;
		if (this.state.words.length - 1 === this.state.count)
			this.setState({ startTime: moment().format("ss") });
		if (this.state.count === 0) {
			this.setState({
				endTime: moment().format("ss"),
				words: ["Finished"],
				finished: true
			});
		} else {
			this.setState({ count: this.state.count - 1 });
		}

		const info = this.state.info;
		info.push({
			img: leftOrRight
		});
		this.setState({ info }, () => {
			console.log("====================================");
			console.log(this.state.info);
			console.log("====================================");
		});
		// this.state.count !== 0
		// 	? this.setState({ count: this.state.count - 1 })
		// 	: this.setState({ words: ["Finished"] });
	};

	getDiff() {
		if (this.state.endTime <= this.state.startTime) {
			return (
				parseInt(this.state.endTime) -
				parseInt(this.state.startTime) +
				60
			);
		}
		return parseInt(this.state.endTime) - parseInt(this.state.startTime);
	}

	render() {
		return (
			<div className="App">
				<div className="left" onClick={() => this.handleClick("left")}>
					<img
						className="fit"
						src={require("./images/qmilk_product.jpg")}
						alt=""
					></img>
					<h3>Nice</h3>
				</div>

				<div className="middle">
					<h3>{this.state.words[this.state.count]}</h3>
					{this.state.finished
						? "Test Finished in " + this.getDiff() + "	seconds."
						: "Wait"}
				</div>
				<div
					className="right"
					onClick={() => this.handleClick("right")}
				>
					<img
						className="fit"
						src={require("./images/qmilk_product.jpg")}
						alt=""
					></img>
					<h3>Meah!</h3>
				</div>
			</div>
		);
	}
}

export default App;
