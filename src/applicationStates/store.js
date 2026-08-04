import { configureStore } from "@reduxjs/toolkit";
import userAuthSlice from './reduxSlices/userAuthSlice.js';
import contactUsSlice from './reduxSlices/contactUsSlice.js';
import notesSlice from './reduxSlices/notesSlice.js';

const store = configureStore({
    reducer: {
        auth: userAuthSlice,
        contactus: contactUsSlice,
        notes: notesSlice
    },
    devTools: true,
});

export default store;