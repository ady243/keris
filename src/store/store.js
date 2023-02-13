import {configureStore} from "@reduxjs/toolkit";
import {movieReducer, categoryReducer} from "../reducer/reducer";

export const store = configureStore({
    reducer: {
        movie: movieReducer,
        category: categoryReducer
    }
})