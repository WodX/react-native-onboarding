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
    updateImage: (state, action) => {
      const image_index = state.items.findIndex(
        img_data => img_data.uri === action.payload.uri,
      );

      if (image_index < 0) {
        throw 'user not found';
      }
      state.items[image_index] = {
        ...state.items[image_index],
        ...action.payload,
      };
    },
    removeImage: (state, action) => {
      state.items = state.items.filter(image => image.uri !== action.payload);
    },
  },
});

export const {addImage, removeImage, updateImage} = imageSlice.actions;

export default imageSlice.reducer;
