
import { combineReducers } from 'redux'
import {ADD_MOVIES,
        ADD_FAVOURITE,
        REMOVE_FROM_FAVOURITES,
        SET_SHOW_FAVOURITES
    } from '../actions'

const intialMovieState={
    list:[],
    favourites:[],
    showFavourites:false
}
//in making using if else us eswitch case which is better for the look
export function movies (state=intialMovieState,action){
    console.log('movies reducer',)
    // if(action.type===ADD_MOVIES){
    //     return {
    //         ...state,
    //         list:action.movies
    //     }
    // }
    // return state;
    switch(action.type){
        case ADD_MOVIES:
            return{
                ...state,
                list: action.movies
            }
        case ADD_FAVOURITE:
            return{
                ...state,
                favourites:[action.movie,...state.favourites]
            }
        case REMOVE_FROM_FAVOURITES:
                const filteredArray=state.favourites.filter(movie=>movie.Title !== action.movie.Title)
                return{
                    ...state,
                    favourites:filteredArray
                }
        case SET_SHOW_FAVOURITES:
            return{
                ...state,
                showFavourites:action.val
            }
        default:
            return state;
    }

}

const initialSearchState={
    result:{}
}
export function search (state=initialSearchState,action){
    console.log('search reduecer');
    return state;
}


const initialRootState={
    movies:intialMovieState,
    search:initialSearchState
}

// export default function rootReducer(state=initialRootState,action){
//     return{
//         movies:movies(state.movies,action),
//         search:search(state.search,action)
//     }
// }


export default combineReducers({
    movies:movies,
    search:search
})