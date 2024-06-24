import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { ETaskStatus, ITask } from '~entities/task';

export interface ITasksState {
    todos: ITask[];
    removedTasks: ITask[];
}

const initialState: ITasksState = {
    todos: [],
    removedTasks: [],
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<ITask>) => {
            state.todos.unshift(action.payload);
        },

        editTask: (state, action: PayloadAction<ITask>) => {
            const taskIndex = state.todos.findIndex(({ id }) => id === action.payload.id);

            if (taskIndex >= 0) {
                state.todos[taskIndex] = action.payload;
            }
        },

        removeTask: (state, action: PayloadAction<ITask['id']>) => {
            const taskIndex = state.todos.findIndex(({ id }) => id === action.payload);

            state.removedTasks.unshift({
                ...state.todos[taskIndex],
                status: ETaskStatus.REMOVED,
            });

            state.todos = state.todos.filter(({ id }) => id !== action.payload);
        },
    },
});

export const { editTask, addTask, removeTask } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
