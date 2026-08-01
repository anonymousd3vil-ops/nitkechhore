import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../../helpers/axiosInstance";
import toast from "react-hot-toast";


const USER_KEY = 'NITKeChhore_user';
const LOGIN_KEY = 'NITKeChhore_isLoggedIn';
const USER_ROLE = 'role';

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
    role: localStorage.getItem(USER_ROLE) || '',
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

        // console.log((await request))

        const response = await request;
        return response.data;
    }catch(err){
        toast.error(err?.response?.data?.message);
    }
});

export const login = createAsyncThunk('/auth/login', async(data) => {
    try{
        const request = API.post('/user/login', data);
        toast.promise(request, {
            loading: "Loging In, Please Wait...",
            success: (data) => data?.data?.message || 'Login Successfull!!',
            error: (err) => err?.response?.data?.message || 'Failed to Login!!'
        });

        const response = await request;
        return response.data;

    }catch(err){
        toast.error(err?.response?.data?.message);
    }
})

export const logout = createAsyncThunk('/auth/logout', async() => {
    try{
        const request = API.get('/user/logout');
        toast.promise(request, {
            loading: "Please Wait, Logout in Process...",
            success: (data) => data?.data?.message || 'Logout Successfull!!',
            error: (err) => err?.response?.data?.message || 'Failed to Logout!!'
        });

        const response = await request;
        return response.data;
    }
    catch(err){
        toast.error(err?.response?.data?.message);
    }
});

export const getProfile = createAsyncThunk('/auth/me', async () => {
    try{
        const request = API.get('/user/me');
        toast.promise(request, {
            loading: "Please Wait, Logout in Process...",
            success: (data) => data?.data?.message || 'Logout Successfull!!',
            error: (err) => err?.response?.data?.message || 'Failed to Logout!!'
        });

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
        })
        .addCase(registerUser.fulfilled, (state)=>{
                state.loading = false;
                
        })
        .addCase(registerUser.rejected, (state) => {
            state.loading = false;  
            toast.error("Registration Failed");
        })
        .addCase(getProfile.fulfilled, (state, action) => {
            state.loading = false;
            state.isLoggedin = true;

            // console.log(action.payload);

            state.data = action.payload.user;
            state.role = action.payload.user.role;

            localStorage.setItem(USER_KEY, JSON.stringify(state.data));

            localStorage.setItem(LOGIN_KEY, "true");
        })
        .addCase(login.pending, (state) => {
            state.loading = true;
        })
        .addCase(login.fulfilled, (state, action) => {
            state.loading = false;
            state.isLoggedin = true;

            state.data = action.payload.user;
            state.role = action.payload.user.role;

            localStorage.setItem(USER_KEY, JSON.stringify(state.data));
            localStorage.setItem(LOGIN_KEY, "true");
            localStorage.setItem(USER_ROLE, action.payload.user.role);
        })
        .addCase(login.rejected, (state) => {
            state.loading = false;
            toast.error("Login Failed")
        })
        .addCase(logout.pending, (state) => {
            state.loading = true;
        })
        .addCase(logout.fulfilled, (state) => {
            state.loading = false;
            state.isLoggedin = false;

            state.data = {};
            state.role = ''
            localStorage.clear();
        })
        .addCase(logout.rejected, (state) => {
            state.loading = false;
            toast.error("Logout Failed!!")
        })
    },
});

export default userAuthSlice.reducer;