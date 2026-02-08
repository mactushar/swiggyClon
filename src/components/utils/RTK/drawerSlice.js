import { createSlice } from "@reduxjs/toolkit";

const drawerSlice = createSlice({
  name: "drawer",
  initialState: {
    isOpen: false,
    type: null, //yaha type log in or register hona chahiye must be log in or register
  },

  reducers: {
    openDrawer: (state, action) => {
      state.isOpen = true;
      state.type = action.payload;
    },
    closeDrawer: (state, action) => {
      state.isOpen = false;
      state.type = null;
    },
  },

  
});

export const {openDrawer,closeDrawer} =drawerSlice.actions
export default drawerSlice.reducer

