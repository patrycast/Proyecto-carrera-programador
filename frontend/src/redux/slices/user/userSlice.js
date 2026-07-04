import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    user: null,
    hiddenMenu: true,
}

const userSlice= createSlice({
    name: "user",
    initialState: INITIAL_STATE,
    reducers: {
        setUser: (state, action) => {
            return {
                ...state,
                user: action.payload,
            };
        },
        toggleHiddenMenu: (state) => {
            return {
                ...state,
                hiddenMenu: !state.hiddenMenu,
            };
        },
        clearUser: (state) => {
            state.user = null;
        }
    },

});

export const { setUser, toggleHiddenMenu, clearUser } = userSlice.actions;
export default userSlice.reducer;