
import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './taskReducer.js';

export const store = configureStore({
    reducer: {
        tasks: taskReducer,
    }
}
);

// export default store;