import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import API from "../../helpers/axiosInstance.js"
import toast from "react-hot-toast"

const initialState = {
    loading: false,
    mail: '',
    subject: '',
    message: ''
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

        const response = await request;
        return response.data;

    }catch(err){
        console.log(err.message)
    }
});

export const getQueries = createAsyncThunk('/contact/getqueries', async() => {
    const request = await API.get('/contact/getQueries');
    toast.promise(request, {
        loading: "Please wait, Fetching Queries.",
        success: "All Queries Fetched.",
        error: "There is some error occured while fetching Queries."
    })
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
    }
});

export default contactUsSlice.reducer;