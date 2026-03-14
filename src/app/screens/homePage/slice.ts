import { createSlice } from "@reduxjs/toolkit"; 
import { HomePageState } from "../../../lib/types/screen";

const initialState: HomePageState = {
    popularDishes: [],
    newDishes: [],
    topUsers: [],
};

const homePageSlice = createSlice({
    name: "homePage",
    initialState: initialState,
    reducers: {
        setPopularDishes: (state, action) => {
            state.popularDishes = action.payload;
        },
        setnewDishes: (state, action) => {
            state.newDishes = action.payload;
        },
        settopUsers: (state, action) => {
            state.topUsers = action.payload;
        }
    }
});

export const { setPopularDishes, setnewDishes, settopUsers } = homePageSlice.actions; // dispatch orqali malumot obkelish keyinchalik

const HomePageReducer = homePageSlice.reducer;
export default HomePageReducer;