import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    age: '',
    email: '',
  },
  reducers: {
    updateUser: (state, action) => {
      state = action.payload;
    },
  },
});

export const {updateUser} = userSlice.actions;

export default userSlice.reducer;
