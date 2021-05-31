import {createSlice} from '@reduxjs/toolkit';

export const albumSlice = createSlice({
  name: 'album',
  initialState: {
    items: [],
  },
  reducers: {
    addAlbum: (state, action) => {
      const album = {
        id: Date.now(),
        name: action.payload.name || 'Album' + Date.now(),
        user_id: action.payload.user_id,
      };
      state.items.push(album);
    },
  },
});

export const {addAlbum} = albumSlice.actions;

export default albumSlice.reducer;
