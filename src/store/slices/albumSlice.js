import {createSlice} from '@reduxjs/toolkit';

export const albumSlice = createSlice({
  name: 'album',
  initialState: {
    items: [],
  },
  reducers: {
    addAlbum: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const {addAlbum} = albumSlice.actions;

export default albumSlice.reducer;
