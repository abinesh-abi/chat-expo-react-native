import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  ApiResponse,
  Chat,
  CreateMessageBody,
  Message,
  Theme,
} from "@/types/global";
import { getChatList, postMessage, retrieveChatMessages } from "@/api";
import { AxiosError } from "axios";
import { RootState } from "..";

type InitialStateType = {
  chatList: ApiResponse<Chat>;
  selectedChat: Chat | null;
  chatMessages: Message[];
  currentMessagePage: ApiResponse<Message>;
};

const initialState: InitialStateType = {
  chatList: { count: 0, data: [] },
  selectedChat: null,
  chatMessages: [],
  currentMessagePage: { count: 0, data: [] },
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

export const fetchChatMessages = createAsyncThunk(
  "/chat-messages",
  async ({ chatId }: { chatId: string }, thunkApi) => {
    try {
      const response: ApiResponse<Message> = await retrieveChatMessages(chatId);
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

export const createMessage = createAsyncThunk(
  "/chat-messages-create",
  async (body: CreateMessageBody, thunkApi) => {
    try {
      const response: Message = await postMessage(body);
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
    clearChatMessages: (state) => {
      state.chatMessages = [];
    },
    appendChatMessages: (state, action: PayloadAction<Message>) => {
      state.chatMessages = [action.payload, ...state.chatMessages];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchChatList.fulfilled, (state, action) => {
        state.chatList = action.payload;
      })
      .addCase(fetchChatMessages.fulfilled, (state, action) => {
        state.chatMessages = [...state.chatMessages, ...action.payload.data];
        state.currentMessagePage = action.payload;
      })
      .addCase(createMessage.fulfilled, (state, action) => {
        state.chatMessages = [...state.chatMessages, action.payload];
      });
  },
});

export const { setSelectedChat, clearChatMessages } = chatSlice.actions;

export default chatSlice.reducer;
