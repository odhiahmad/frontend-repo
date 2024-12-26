import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  data: Record<string, any> | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  data: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchUserStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchUserSuccess: (state, action: PayloadAction<Record<string, any>>) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchUserError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchUserStart, fetchUserSuccess, fetchUserError } = userSlice.actions;
export default userSlice.reducer;