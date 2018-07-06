
import {  CHANGE_SEARCH_FIELD , REQUIRE_ROBOTS_PENDING, REQUIRE_ROBOTS_SUCCESS, REQUIRE_ROBOTS_FAILED } from './constants.js'



const initialStateSearch = {

	RsearchField: ''
}

export const searchRobots = (st=initialStateSearch, action={}) => {


   console.log('Reducers (SS) (1) : searchRobots');

	switch(action.type){
        case CHANGE_SEARCH_FIELD :
        return Object.assign({}, st, {RsearchField: action.payload});
        default :
        return st;
	}
}


const initialStateRobots = {

	isPending: false,
	robots: [],
	error: ''
}


export const requestRobots = (st=initialStateRobots, action={}) => {
 console.log('Reducers (RR) (1) : requestRobots');

switch(action.type){
        case REQUIRE_ROBOTS_PENDING :
        return Object.assign({}, st, { isPending: true });
        case REQUIRE_ROBOTS_SUCCESS:
        return Object.assign({}, st, { isPending: false, robots : action.payload});
        case REQUIRE_ROBOTS_FAILED:
        return Object.assign({}, st, { isPending: false, error : action.payload});
        default :
        return st;
	}

}