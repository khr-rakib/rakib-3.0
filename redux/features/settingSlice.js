import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sideNav: false,
}

export const settingSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    sideNavAction: (state, action) => {
        state.sideNav = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { sideNavAction } = settingSlice.actions

export default settingSlice.reducer