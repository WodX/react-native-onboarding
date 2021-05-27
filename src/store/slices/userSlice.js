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
    refreshUser: (state, action) => {
      state.image = action.payload.image;
      state.cover = action.payload.cover;
      state.name = action.payload.name;
      state.description = action.payload.description;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.id = action.payload.id;
    },
  },
});

export const {loginUser, logoutUser, refreshUser} = userSlice.actions;

export default userSlice.reducer;
