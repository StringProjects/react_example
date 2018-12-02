import React, { Component } from 'react';

//components

class ButtonChanger extends Component {

  _onClick(event){
    this.props.changeCurrentValue()
  }
  render() {
    return (
      <div onClick={(event) => this._onClick(event)} style={{backgroundColor: 'blue'}}>
          x {this.props.current_change_value}
      </div>
    );
  }
}

export default ButtonChanger;
