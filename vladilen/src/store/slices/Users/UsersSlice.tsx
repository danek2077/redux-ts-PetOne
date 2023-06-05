import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";
import { UserType } from "../../../type/typeUser";
type initialType = {
  users: UserType[];
};
const initialState: initialType = {
  users: [{ id: "1231231231231", name: "danek", disc: "топ программист" }],
};

const UsersSlice = createSlice({
  initialState,
  name: "UsersSlice",
  reducers: {
    addUser: {
      reducer: (state, action: PayloadAction<UserType>) => {
        state.users.push(action.payload);
      },
      prepare: (obj: { name: string; disc: string }): { payload: UserType } => {
        return { payload: { id: nanoid(), disc: obj.disc, name: obj.name } };
      },
    },
    deleteUser: (state, action: PayloadAction<number>) => {
      state.users = state.users.filter((_, index) => index !== action.payload);
    },
  },
});

export const { addUser, deleteUser } = UsersSlice.actions;
export default UsersSlice.reducer;
