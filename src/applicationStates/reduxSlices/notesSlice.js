import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../../helpers/axiosInstance";
import toast from "react-hot-toast";

const COMPLETSEM1_NOTES = 'sem1notes'

function getStoredNotes(){
    const sem1notes = localStorage.getItem(COMPLETSEM1_NOTES);

    if(!sem1notes){
        return []
    }

    try{
        return JSON.parse(sem1notes)
    }catch{
        localStorage.removeItem(COMPLETSEM1_NOTES);
        return []
    }
}

export const getSem1Notes = createAsyncThunk('/notes/getsem1notes', async () => {
    try{
        const request = API.get('/notes/sem1');
        toast.promise(request, {
            loading: "Please Wait, Fetching Notes...",
            success: (data) => data?.data?.message || 'All Notes Fetched...',
            error: (err) => err?.response?.data?.message || 'Failed to Fetch Notes...'
        });
        
        const response = await request;
        return response.data;

    }catch(err){
        toast.error(err?.response?.data?.message);
    }
});

const initialState = {
    loading: false,
    notes: getStoredNotes()
}

const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getSem1Notes.pending, (state) => {
                state.loading = true;
            })
            .addCase(getSem1Notes.fulfilled, (state, action) => {
                state.loading = false;
                state.notes = action.payload.sem1Notes;

                localStorage.setItem(COMPLETSEM1_NOTES, JSON.stringify(state.notes));
            })
            .addCase(getSem1Notes.rejected, (state) => {
                state.loading = false;
                toast.error("Failed to Fetch Notes.");
            })
    }

});

export default notesSlice.reducer;