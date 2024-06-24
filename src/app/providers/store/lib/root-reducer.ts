import { combineReducers } from '@reduxjs/toolkit';
import { tasksReducer } from '~features/task-actions/model/task.slice';

export const rootReducer = combineReducers({
    tasks: tasksReducer,
});
