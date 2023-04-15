import { configureStore } from "@reduxjs/toolkit";

//reducer

import normalUserSlice from "./features/reducers/normalUserSlice";
import publicDataSlice from "./features/reducers/publicDataSlice";
import articleSlice from "./features/reducers/articleSlice";

export const store=configureStore({
    reducer:{
        normalUser:normalUserSlice,
        publicData:publicDataSlice,
        articleData:articleSlice,

    }
})
