import {createSlice} from '@reduxjs/toolkit';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
  },
  reducers: {
    createUser: (state, action) => {
      const user = {
        id: Date.now(),
        name: action.payload.name || '',
        email: action.payload.email,
        password: action.payload.password,
        image: action.payload.image || '',
        description: action.payload.description || '',
        cover: action.payload.cover || '',
      };

      state.users.push(user);
    },
    updateUser: (state, action) => {
      const user_index = state.users.findIndex(
        user_data => user_data.id === action.payload.id,
      );

      if (user_index < 0) {
        throw 'user not found';
      }

      const user = {
        image:
          action.payload.image != null
            ? action.payload.image
            : state.users[user_index].image,
        cover:
          action.payload.cover != null
            ? action.payload.cover
            : state.users[user_index].cover,
        name:
          action.payload.name != null
            ? action.payload.name
            : state.users[user_index].name,
        description:
          action.payload.description != null
            ? action.payload.description
            : state.users[user_index].description,
        email: action.payload.email || state.users[user_index].email,
      };

      state.users[user_index] = {...state.users[user_index], ...user};
    },
  },
});

export const {createUser, updateUser, updateImage, updateCover} =
  usersSlice.actions;

export default usersSlice.reducer;
