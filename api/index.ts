import { CrudOperations } from "./axiosInstance";

export const PostLogin = new CrudOperations("/login").post;
export const PostSignup = new CrudOperations("/signup").post;
export const getUserDetails = new CrudOperations("/user-details").get;
