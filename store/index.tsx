import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userSlice from './features/userSlice'
import globalSlice from './features/globalSlice'

const rootReducer = combineReducers({
    user: userSlice,
    global: globalSlice,
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

