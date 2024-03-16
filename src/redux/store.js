import { createStore } from "redux";
import { bankReducer } from "./bankReducer";

const initialState = {
    balance: 1000
}

export const store = createStore(bankReducer, initialState);