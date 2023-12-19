import {authReducer} from "../features/auth/model/authReducer";
import {AnyAction, combineReducers, configureStore, ThunkAction, ThunkDispatch} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";

const rootReducer = combineReducers({
    auth: authReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});

export type AppRootStateType = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AnyAction>;

export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>;

// @ts-ignore
window.store = store;

type AppDispatchType = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatchType>();