import React, { Component } from 'react';

//components

class Button extends Component {

	_onClick(event){
		this.props.add(this.props.value)
	}
  render() {
    return (
      <div className={"item"+this.props.id} onClick={(event) => this._onClick(event)} >
        	{this.props.value}
      </div>
    );
  }
}

export default Button;
