import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {authAPI, LoginParamsType} from "../api/auth.api";

const slice = createSlice({
    name: "auth",
    initialState: {
        data:{},
        isLoggedIn: false,
    },
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(registration.fulfilled, (state, action) => {
                state.isLoggedIn = action.payload.isLoggedIn;
            })
            .addCase(getMe.fulfilled, (state, action) => {
                state.data = action.payload;
            })
        // .addCase(initializeApp.fulfilled, (state, action) => {
        //     state.isLoggedIn = action.payload.isLoggedIn;
        // });
    },
});

// thunks

const registration = createAsyncThunk<{ isLoggedIn: boolean }, LoginParamsType>("auth/users", async (arg, thunkAPI) => {
    const {dispatch, rejectWithValue} = thunkAPI;

    const res = await authAPI.createUser(arg);
    console.log(res)

    if (true) {
        return {isLoggedIn: true};
    } else {
        // const isShowAppError = !res.data.fieldsErrors.length;
        // return rejectWithValue({ data: res.data, showGlobalError: isShowAppError });
    }
});
const login = createAsyncThunk<{ isLoggedIn: boolean }, LoginParamsType>("auth/login", async (arg, thunkAPI) => {
    const {dispatch, rejectWithValue} = thunkAPI;
    const res = await authAPI.createToken(arg);
    if (res) {
        return {isLoggedIn: true};
    } else {
        return rejectWithValue(null);
    }
});
const getMe = createAsyncThunk<any>("auth/me", async (_, thunkAPI) => {
    const {dispatch, rejectWithValue} = thunkAPI;
    const res = await authAPI.me();
    if (res) {
        return {...res};
    } else {
        return rejectWithValue(null);
    }
});
// const logout = createAsyncThunk<{ isLoggedIn: boolean }, void>("auth/logout", async (_, thunkAPI) => {
//     const { dispatch, rejectWithValue } = thunkAPI;
//     const res = await authAPI.logout();
//     if (res.data.resultCode === ResultCode.success) {
//         return { isLoggedIn: false };
//     } else {
//         return rejectWithValue(null);
//     }
// });
//
// const initializeApp = createAsyncThunk<{ isLoggedIn: boolean }, void>("app/initializeApp", async (_, thunkAPI) => {
//     const { dispatch, rejectWithValue } = thunkAPI;
//     try {
//         const res = await authAPI.me();
//         if (res.data.resultCode == ResultCode.success) {
//             return { isLoggedIn: true };
//         } else {
//             return rejectWithValue({ data: res.data, showGlobalError: true });
//         }
//     } catch (e) {
//         // handleServerNetworkError(e, dispatch);
//         return rejectWithValue(null);
//     } finally {
//         // dispatch(appActions.setAppInitialized({ isInitialized: true }));
//     }
// });

export const authReducer = slice.reducer;
export const authThunks = {registration, login, getMe};
