import { createSlice } from "@reduxjs/toolkit";
import { servicesMock } from "../../data/ServicesMock";

const INITIAL_STATE = {
    servicesMock: servicesMock,
};

export const servicesSlice = createSlice({
    name: "services",
    initialState: INITIAL_STATE,
    reducers: {
        getServices: (state) => {
            return state
        },
    },
});

export const { getServices } = servicesSlice.actions;
export default servicesSlice.reducer;