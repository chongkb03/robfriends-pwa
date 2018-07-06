import React, { Component } from 'react';
import CardList from './CardList.js';
import Scroll from './Scroll.js';

import { connect } from 'react-redux';

import { robots } from './robots.js';
import SearchBox from './SearchBox.js';



import { setSearchField , requestRobots} from './Actions.js';

const mapStateToProps = state => {
	console.log('2) Map : mapStateToProps');
	return {

		searchFF : state.searchRobots.RsearchField,
		robots : state.requestRobots.robots,
		isPending : state.requestRobots.isPending,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps = (dispatch) => {
console.log('3) Dispatch : mapDispatchToProps');
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
	}
	
}


class App extends Component {

	

	componentDidMount() {
    this.props.onRequestRobots();

		
	}

	
	
	render() {

     const { searchFF, onSearchChange, robots, isPending } = this.props;
     const filteredRobots = robots.filter(robot => {

     	return robot.name.toLowerCase().includes(searchFF.toLowerCase())
     })

     if (isPending) {
       return <h1 className='tc'>loading.......</h1>

     }
    else
    	 {
	return (
		<div className='tc'>
   <h1 className = 'f1'> Robo Friends</h1>
   <SearchBox searchChange={onSearchChange} />
   <Scroll>
   <CardList robots={filteredRobots} />
   </Scroll>
   </div>
	);
   }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
