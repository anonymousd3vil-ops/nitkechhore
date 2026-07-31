import { configureStore } from "@reduxjs/toolkit";
import userAuthSlice from './reduxSlices/userAuthSlice.js'
import contactUsSlice from './reduxSlices/contactUsSlice.js'

const store = configureStore({
    reducer: {
        auth: userAuthSlice,
        contactus: contactUsSlice,
    },
    devTools: true,
});

export default store;