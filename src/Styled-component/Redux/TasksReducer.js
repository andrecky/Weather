const VALUE_INPUT = 'VALUE_INPUT';
const ADD_TASKS = 'ADD_TASKS';
export const valueInputAction = (value) => ({type: VALUE_INPUT, value});
export const addTasksAction = () => ({type: ADD_TASKS});


let initialState = {
    data: [],
    onChange: ''

};


const TasksReducer = (state = initialState, action) => {

    switch (action.type) {
        case VALUE_INPUT: {
            return {...state, onChange: action.value}
        }
        case ADD_TASKS: {
            return {...state, data: [...state.data, state.onChange ], onChange: ''}

        }
        default:
            return state;

    }

};

export default TasksReducer
