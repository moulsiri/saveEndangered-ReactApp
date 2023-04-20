import { configureStore } from "@reduxjs/toolkit";

//reducer

import normalUserSlice from "./features/reducers/normalUserSlice";
import orgDataSlice from "./features/reducers/OrgDataSlice";
import articleSlice from "./features/reducers/articleSlice";
import articleData from "./features/reducers/articleData";

export const store=configureStore({
    reducer:{
        normalUser:normalUserSlice,
        orgData:orgDataSlice,
        articleData:articleSlice,
        articles:articleData,

    }
})
