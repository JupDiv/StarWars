import {createSlice} from '@reduxjs/toolkit';

export const animationSlice = createSlice({
  name: 'animation',
  initialState: {
    isAnimating: true,
  },
  reducers: {
    setIsAnimating: (state, action) => {
      state.isAnimating = action.payload;
    },
  },
});

export const {setIsAnimating} = animationSlice.actions;

export default animationSlice.reducer;
