import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {get_memes} from '../../api/imgflip';

export const fetchImages = createAsyncThunk('image/fetchFromApi', async () => {
  const response = await get_memes();
  return response.success ? response.data.memes : [];
});

export const imageSlice = createSlice({
  name: 'image',
  initialState: {
    items: [],
    api: [],
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
  extraReducers: {
    [fetchImages.fulfilled]: (state, action) => {
      state.api = action.payload;
    },
  },
});

export const {addImage, removeImage, updateImage} = imageSlice.actions;

export default imageSlice.reducer;
