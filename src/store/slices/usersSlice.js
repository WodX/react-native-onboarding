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
  },
});

export const {createUser} = usersSlice.actions;

export default usersSlice.reducer;
