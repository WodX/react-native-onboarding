import {createSlice} from '@reduxjs/toolkit';

export const imageSlice = createSlice({
  name: 'image',
  initialState: {
    items: [],
  },
  reducers: {
    addImage: (state, action) => {
      state.items.push(action.payload);
    },
    removeImage: (state, action) => {
      state.items = state.items.filter(image => image.uri !== action.payload);
    },
  },
});

export const {addImage, removeImage} = imageSlice.actions;

export default imageSlice.reducer;
