import { CrudOperations } from "./axiosInstance";

/** user */
export const PostLogin = new CrudOperations("/user/login").post;
export const PostSignup = new CrudOperations("/user/signup").post;
export const getUserDetails = new CrudOperations("/user/user-details").get;

/** chat */
export const getChatList = new CrudOperations("/chat/list").get;
export const retrieveChatMessages = new CrudOperations("/message/msg-by-chat").retrieve;
