import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userSlice from './features/userSlice'

const rootReducer = combineReducers({
    user: userSlice,
});

// Create the store
const store = configureStore({
    reducer: rootReducer,
});

export default store

// export RootState
export type RootState = ReturnType<typeof rootReducer>;

// Define AppDispatch
export type AppDispatch = typeof store.dispatch;

