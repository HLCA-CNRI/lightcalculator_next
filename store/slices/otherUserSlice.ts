import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

export interface UserState2 {
    name2: string;
    email2: string;
  }

  const initialState: UserState2 = {
    name2: 'Che Rin',
    email2: 's1231231@gmail.com',
  } as const;
  

  export const otherUserSlice = createSlice({
      name:'user2',
      initialState,
      reducers: {
        setName1: (
          state: Draft<typeof initialState>,
          action: PayloadAction<typeof initialState.name2>
        ) => {
          state.name2 = action.payload;
        },
        setEmail1: (
          state: Draft<typeof initialState>,
          action: PayloadAction<typeof initialState.email2>
        ) => {
          state.email2 = action.payload;
        },
      },

  })

  export const getUser2State = (state: { user2: UserState2 }) => state.user2;
  export const { setName1, setEmail1 } = otherUserSlice.actions;

  export default otherUserSlice.reducer;