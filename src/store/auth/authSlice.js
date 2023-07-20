import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'Auth',
    initialState: {
        status: 'checking', // 'authenticated', 'not-authenticated'
        user:{},
        errorMessage: undefined,
    },
    reducers: {
        checking:( state) => {
            state.status = 'checking';
            state.user= {};
            state.errorMessage = undefined;
        },
        onLogin: ( state, { payload } ) => {
            state.status = 'authenticated';
            state.user = payload;
            user.errorMessage = undefined;
        }
    }
});


// Action creators are generated for each case reducer function
export const { checking, onLogin } = authSlice.actions;