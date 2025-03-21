import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ApiResponse, Chat, Theme } from "@/types/global";
import { getChatList } from "@/api";
import { AxiosError } from "axios";

type InitialStateType = {
  chatList: ApiResponse<Chat>;
  selectedChat: Chat | null;
};

const initialState: InitialStateType = {
  chatList: { count: 0, data: [] },
  selectedChat: null,
};

export const fetchChatList = createAsyncThunk(
  "/chat-list",
  async (_, thunkApi) => {
    try {
      const response = await getChatList();
      return response;
    } catch (error) {
      const err = error as AxiosError;
      if (err.response?.data) {
        throw thunkApi.rejectWithValue(err.response.data);
      }
      throw thunkApi.rejectWithValue({ message: "Error" });
    }
  }
);

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    // set selected Chat
    setSelectedChat: (state, action: PayloadAction<Chat>) => {
      state.selectedChat = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchChatList.fulfilled, (state, action) => {
      state.chatList = action.payload;
    });
  },
});

export const {setSelectedChat} = chatSlice.actions;

export default chatSlice.reducer;
