import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    image: '',
    name: 'André Nunes',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras malesuada ipsum ac nisi vestibulum mattis. Nullam vel ex est. Integer varius, mauris sed bibendum rutrum, justo odio tempor libero, eu aliquet lectus massa vel velit. Sed tortor metus, mollis ac porttitor a, efficitur eget elit. Phasellus suscipit fermentum nisl, efficitur pretium magna suscipit eu. Sed rhoncus urna neque, et consectetur sem congue ut.',
    email: 'myemail@example.com',
  },
  reducers: {
    updateUser: (state, action) => {
      state.image = action.payload.image || state.image;
      state.name = action.payload.name || state.name;
      state.description = action.payload.description || state.description;
      state.email = action.payload.email || state.email;
    },
  },
});

export const {updateUser} = userSlice.actions;

export default userSlice.reducer;
