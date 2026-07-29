import { configureStore } from "@reduxjs/toolkit";
import userAuthSlice from './reduxSlices/userAuthSlice.js'

const store = configureStore({
    reducer: {
        auth: userAuthSlice,
    },
    devTools: true,
});

export default store;