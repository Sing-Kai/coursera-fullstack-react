// import {LEADERS} from '../shared/leaders';
import * as ActionTypes from './ActionTypes';

export const Leaders = (state = { isLoading: true,errMess: null, leaders:[]}, action) =>{
    switch(action.type){
        case ActionTypes.ADD_LEADERS:
            return {...state, isLoading: false, errMess: null, leaders: action.payload};

        case ActionTypes.LEADERS_LOADING:
            return {...state, isLoading: true, errMess: null, leaders: []}

        case ActionTypes.LEADERS_FAILED:

            // console.log("failed loading dish")
            // console.log(state);
            // console.log(action.payload);

            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }

}