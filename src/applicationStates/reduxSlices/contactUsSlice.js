import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import API from "../../helpers/axiosInstance.js"
import toast from "react-hot-toast"

const ALLQUERIES = 'all_queries'

function getStoredQueries(){
    const queries = localStorage.getItem(ALLQUERIES);

    if(!queries){
        return [];
    }

    try{
        return JSON.parse(queries)
    }catch{
        localStorage.removeItem(ALLQUERIES);
        return [];
    }
}



const initialState = {
    loading: false,
    queries: getStoredQueries(),
}

export const contactusSubmit = createAsyncThunk('/contact/contactus', async(data) => {
    try{
        // console.log(data);
        const request = API.post('/contact/contactus', data);

        toast.promise(request, {
            loading: "Please wait, Submitting Query.",
            success: (res) => res.data.message,
            error: (err) =>
                err?.response?.data?.message || "Failed to Submit the Query."
        });

    }catch(err){
        console.log(err.message)
        toast.error(err?.response?.data?.message);
    }
});

export const getQueries = createAsyncThunk('/contact/getqueries', async() => {
    try{
        const request = API.get('/contact/getQueries');
        toast.promise(request, {
            loading: "Please wait, Fetching Queries.",
            success: "All Queries Fetched.",
            error: "There is some error occured while fetching Queries."
        });

        const response = await request;
        return response.data;
    }catch(err){
        console.log(err.message)
        toast.error(err?.response?.data?.message);
    }

})

const contactUsSlice = createSlice({
    name: 'contactUsMessages',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(contactusSubmit.pending, (state)=>{
                state.loading = true;
            })
            .addCase(contactusSubmit.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(contactusSubmit.rejected, (state) => {
                state.loading = false;
                toast.error("Query Submission Failed.")
            })
            .addCase(getQueries.pending, (state)=>{
                state.loading = true;
            })
            .addCase(getQueries.fulfilled, (state, action) => {
                // console.log(action.payload);
                state.loading = false;
                state.queries = action.payload.queries;
            })
            .addCase(getQueries.rejected, (state) => {
                state.loading = false;
            })
    }
});

export default contactUsSlice.reducer;