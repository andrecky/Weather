import React from 'react';
import {combineReducers, createStore, applyMiddleware} from "redux";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import TasksReducer from "./Styled-component/Redux/TasksReducer";
import {Provider} from 'react-redux'
import AppReducer from "./Redux/AppReducer";
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";

const superReducer = combineReducers({
    Reducer: AppReducer,


});

const store = createStore(superReducer, composeWithDevTools(applyMiddleware(thunk)),);

ReactDOM.render(<Provider store={store}> <App/></Provider>, document.getElementById('root'));

serviceWorker.unregister();
export default store
