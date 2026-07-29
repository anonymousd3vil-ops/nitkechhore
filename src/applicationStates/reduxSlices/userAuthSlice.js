import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../../helpers/axiosInstance";
import toast from "react-hot-toast";


const USER_KEY = 'NITKeChhore_user';
const LOGIN_KEY = 'NITKeChhore_isLoggedIn'

function getStoredUserData(){
    const userData = localStorage.getItem(USER_KEY);

    if(!userData) return {};

    try{
        return JSON.parse(userData);
    }catch{
        localStorage.removeItem(USER_KEY);
        return {};
    }
}

const initialState = {
    loading: false,
    isLoggedin: localStorage.getItem(LOGIN_KEY) === 'true',
    data: getStoredUserData()
}

export const registerUser = createAsyncThunk('/auth/register', async(data)=>{
    try{
        const request = API.post('/user/register', data);
        toast.promise(request, {
            loading: "Wait we are creating your Account.",
            success: (data) => data?.data?.message || 'Account Created Successfully!',
            error: (err)=> err?.response?.data?.message|| 'Failed to create account, Try Again!!'
        });

        console.log((await request))

        const response = await request;
        return response.data;
    }catch(err){
        toast.error(err?.response?.data?.message);
    }
});

const userAuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(registerUser.pending, (state)=>{
                state.loading = true;
            }
        )
        .addCase(registerUser.fulfilled, (state, action) => {
            state.loading = false;
            state.isLoggedin = true;

            console.log(action.payload);

            state.data = action.payload.user;

            localStorage.setItem(USER_KEY, JSON.stringify(state.data));

            localStorage.setItem(LOGIN_KEY, "true");
        })
        .addCase(registerUser.rejected, (state) => {
            state.loading = false;  
            toast.error("Registration Failed");
        });
    },
});

export default userAuthSlice.reducer;