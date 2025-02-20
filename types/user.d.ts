export type User = {
  _id: string;
  username: string;
  email: string;
  password: string;
  image?: string;
  createdAt?: string;
  updatedAt?: string;
};

export type SignupBody = {
  username: string;
  email: string;
  password: string;
};

export type LoginBody = {
  username: string;
  password: string;
};
