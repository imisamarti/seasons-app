import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from "./SeasonDisplay"

class App extends React.Component {
	constructor(props){
		super(props);

		this.state = {lat: null, errMessage:''};

		window.navigator.geolocation.getCurrentPosition(
			(position) => {
				this.setState({lat: position.coords.latitude});
			},
			(err) => {
				this.setState({errMessage: err.message});
			}
			);
	}

	render(){
		return (
			<div>
			<div>"Latitude: " {this.state.lat}</div>
			<br />
			<div>"Error: " {this.state.errMessage}</div>
			</div>
			);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));