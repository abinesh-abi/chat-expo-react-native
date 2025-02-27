import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userSlice from './features/userSlice'
import globalSlice from './features/globalSlice'
import chatSlice from './features/chatSlice'

const rootReducer = combineReducers({
    user: userSlice,
    global: globalSlice,
    chat: chatSlice,
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

