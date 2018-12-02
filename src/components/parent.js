import React, { Component } from 'react';

//components
import Button from './button'
import ButtonChanger from './button_changer'
import PressedList from './pressed_list'

class Parent extends Component {
	constructor(props) {
  	super(props);
  	this.state = { 
  		result: 0,
  		current_change_value: 1,
  		last_added: ""
  	};
	}

	_addToResult(value, state){
		//MAL: this.state + value
		this.setState({last_added: value, result: state.result + value})
	}

  render() {
    return (
    	<div>
	      <div className="grid-container">
	      		<div className="item0">
	      			Result = {this.state.result}
	      		</div>
	        	<Button id={1} value={1 * this.state.current_change_value} add={(value) => this._addToResult(value, this.state)}/>
	        	<Button id={2} value={2 * this.state.current_change_value} add={(value) => this._addToResult(value, this.state)}/>
	        	<Button id={3} value={3 * this.state.current_change_value} add={(value) => this._addToResult(value, this.state)}/>
	        	<ButtonChanger current_change_value={this.state.current_change_value} changeCurrentValue={(value) => this.setState({last_added: "", current_change_value: this.state.current_change_value + 1})}/>
	      </div>
	      <PressedList last_added={this.state.last_added} />
      </div>

    );
  }
}

export default Parent;
