import { configureStore } from "@reduxjs/toolkit";
import teamSlice from "./teamSlice";

const store = configureStore({
    reducer: {
        team: teamSlice
    }
})


export default store;