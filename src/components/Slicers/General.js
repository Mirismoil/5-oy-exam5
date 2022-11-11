import { createSlice } from "@reduxjs/toolkit";
const GeneralSlie = createSlice({
  name: "general",
  initialState: {
    token: "",
    auth: false,
    CategoryData: [],
    Posts: []
  },
  reducers: {
    getToken: (state, action) => {
      state.token = action.payload;
    },
    setAuth: (state,action) =>{
        state.auth = action.payload
    },
    CategoryData: (state,action) => {
      state.CategoryData = action.payload
    },
    getPosts: (state,action) => {
      state.Posts = action.payload
    }
  },
});
export const { getToken,setAuth,CategoryData,getPosts } = GeneralSlie.actions;
export default GeneralSlie.reducer;
