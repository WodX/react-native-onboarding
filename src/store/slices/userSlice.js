import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    loginUser: (state, action) => {
      state.image = action.payload.image;
      state.cover = action.payload.cover;
      state.name = action.payload.name;
      state.description = action.payload.description;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.id = action.payload.id;
    },
    logoutUser: state => {
      state.id = '';
    },
    updateUser: (state, action) => {
      state.image = action.payload.image || state.image;
      state.cover = action.payload.cover || state.cover;
      state.name = action.payload.name || state.name;
      state.description = action.payload.description || state.description;
      state.email = action.payload.email || state.email;
    },
    updateImage: (state, action) => {
      state.image = action.payload.image;
    },
    updateCover: (state, action) => {
      state.cover = action.payload.cover;
    },
  },
});

export const {updateUser, updateImage, updateCover, loginUser, logoutUser} =
  userSlice.actions;

export default userSlice.reducer;
