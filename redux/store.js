import { configureStore } from '@reduxjs/toolkit';

// import slices
import settingSlice from './features/settingSlice';

export const store = configureStore({
  reducer: {
      settings: settingSlice
  },
})