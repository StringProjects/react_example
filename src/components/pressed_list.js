import React, { Component } from 'react';

//components

class PressedList extends Component {
	constructor(props) {
  	super(props);
  	this.state = { 
  		list: [],
  	};
	}

	componentWillReceiveProps(nextProps){
		if(nextProps.last_added != ""){
			
			let new_list = this.state.list
			new_list.push(nextProps.last_added)

			this.setState({list: new_list})	
		}
		
	}

  render() {
    return (
      <div>
      	<p>Last clicked</p>
        	{
        		this.state.list.map((value,index) => {
        			return (
        					<p>{value}</p>
        				)
        		})
        	}
      </div>
    );
  }
}

export default PressedList;
