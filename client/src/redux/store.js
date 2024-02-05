import { configureStore } from '@reduxjs/toolkit'
import loadersSlice from "./loadersSlice";
import usersSlice from "./usersSlice";

const store = configureStore({
    reducer: {
        loaders: loadersSlice,
        users: usersSlice
    }
})

export default store;