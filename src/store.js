import { configureStore } from "@reduxjs/toolkit";

//reducer

import normalUserSlice from "./features/reducers/normalUserSlice";

export const store=configureStore({
    reducer:{
        normalUser:normalUserSlice

    }
})