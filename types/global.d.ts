export type Theme = "dark" | "light";
export type ApiResponse<T> = {
  count: number;
  //   next: string | null;
  //   previous: string | null;
  //   current: number;
  data: T[];
};

// export type PaginatedApiResponse<T> = {
//   status: boolean;
//   error: string | null;
//   data: ApiResponse<T>;
// };

// export type ApiResponseArray<T> = {
//   status: boolean;
//   error: string | null;
//   data: T[];
// };

// export type ApiResponseObject<T> = {
//   status: boolean;
//   error: string | null;
//   data: T;
// };

export type ChatUser = {
  _id: string;
  username: string;
  email: string;
};

export type Chat = {
  _id: string;
  users: string[];
  userDetails: ChatUser[];
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type Message = {
  _id: string;
  sender: string;
  chatId: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};
