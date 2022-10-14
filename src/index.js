import React from 'react';
import ReactDOM from 'react-dom/client';
import {applyMiddleware, createStore } from 'redux';
import './index.css';
import App from './components/App';
import rootReducer from './reducers';


//function logger(obj,next,action)
// const logger =function({dispatch,getState}){
//     return function(next){
//         return function(action){
//             //middleware
//             console.log('ACCTION_TYPE',action.type);
//             next(action);
//         }
//     }
// }


const logger=({dispatch,getState})=>(next)=>(action)=>{
    //logger code 
    console.log('ACCTION_TYPE',action.type);
    next(action);
}

const store=createStore(rootReducer,applyMiddleware(logger));
console.log('store',store);
// console.log('BEFORE STATE',store.getState());

// store.dispatch({
//   type:'ADD_MOVIES',
//   movies:[{name:'superman'}]
// });

// console.log('AFTER STATE',store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<App store={store} />
);