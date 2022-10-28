import { createReducer } from "@reduxjs/toolkit";
import setFilter from "./actionsFilter";

// const initialState = {
//         filter: "",
// };

export const filterReducer = createReducer("", {
    [setFilter]: (_, {payload}) =>  payload,
});