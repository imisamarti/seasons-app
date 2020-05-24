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

		if(this.state.errMessage && !this.state.lat){
			return <div style={{color:'red'}}> Error: {this.state.errMessage} </div>
		} 

		if(!this.state.errMessage && this.state.lat){
			return <div style={{color:'blue'}}> Latitude: {this.state.lat} </div>
		}

		return <div>Loading... </div>
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));