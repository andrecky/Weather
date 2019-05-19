import {axiosInstance} from "../axios";

const GET_WATER = 'GET_WATER';
const VALUE_INPUT = 'VALUE_INPUT';
const ADD_EVENT = 'ADD_EVENT';
const GET_DATA = 'GET_DATA';
const PUSH_INPUT = 'PUSH_INPUT';
const ERROR_CITY = 'ERROR_CITY';
const CLEAR_CHANGE = 'CLEAR_CHANGE';

const clearChangeAction = () => ({type: CLEAR_CHANGE});
export const errorCityAction = (e) => ({type: ERROR_CITY, e});
export const pushInputAction = (e) => ({type: PUSH_INPUT, e});
export const onChangeValueAction = (value) => ({type: VALUE_INPUT, value});
export const submitValueAction = () => ({type: ADD_EVENT});
export const getDataAction = (obj) => ({type: GET_DATA, obj});
export const getWater = (p) => ({type: GET_WATER, p});

const API_KEY = '73268a7de5c636172dacd291890f5218';

export const abcThunk = () => (dispatch, getState) => {

    dispatch(submitValueAction());
    let arr = getState();
    localStorage.setItem('key', arr.Reducer.data);
    axiosInstance.get(`/weather?q=${arr.Reducer.onChange}&appid=${API_KEY}&units=metric`)
        .then((par) => {

            dispatch(getWater((par)));
            dispatch(clearChangeAction());
        }).catch((e) => dispatch(errorCityAction(e.response.data.message)))
};

export const getDataThunk = () => (dispatch) => {
    let object = localStorage.getItem('key');
    if (object) {
        object = object.split(',')
    } else {
        object = []
    }
    dispatch(getDataAction(object));
};

let initialState = {
    onChange: '',
    data: [],
    items: '',
    error: '',

};

const AppReducer = (state = initialState, action) => {

    switch (action.type) {
        case VALUE_INPUT: {
            return {...state, onChange: action.value, error: ''}
        }
        case ADD_EVENT: {
            return {...state, data: [...state.data.filter((item) => item !== state.onChange), state.onChange]}
        }
        case GET_DATA: {
            return {...state, data: action.obj}
        }
        case GET_WATER: {
            return {...state, items: action.p}
        }
        case PUSH_INPUT: {
            return {...state, onChange: action.e, error: ''}
        }
        case ERROR_CITY: {
            return {...state, error: action.e, onChange:''}
        }
        case CLEAR_CHANGE: {
            return {...state, onChange: ''}
        }
        default:
            return state;

    }

};

export default AppReducer
