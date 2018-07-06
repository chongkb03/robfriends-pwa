
import {  CHANGE_SEARCH_FIELD , REQUIRE_ROBOTS_PENDING, REQUIRE_ROBOTS_SUCCESS, REQUIRE_ROBOTS_FAILED } from './constants.js'

export const setSearchField = (text) => {
  console.log('Action SS (4): setSearchField');
  return { type: CHANGE_SEARCH_FIELD, payload : text }
}


export const requestRobots = () => (dispatch) => {

	 console.log('Action RR (4): requestRobots');
   dispatch({type: REQUIRE_ROBOTS_PENDING });
   fetch('http://jsonplaceholder.typicode.com/users')
		.then(r => r.json())
		.then(u => dispatch({type: REQUIRE_ROBOTS_SUCCESS, payload: u }))
		.catch(e => dispatch({type: REQUIRE_ROBOTS_FAILED, payload: e }))

}



