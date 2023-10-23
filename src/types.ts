import { Dispatch, SetStateAction } from "react";

// POST
export interface Comment {
  description: string;
}

export interface Post {
  userId?: number | null;
  id?: number;
  title?: string;
  content?: string;
  likes?: number;
  unlikes?: number;
  comments?: Array<Comment>;
  date?: string;
  img?: string;
}

export type Posts = Post[]; // Array<Post>

// USER
export interface User {
  id: number;
  name: string | undefined;
  email: string | undefined;
  password: string | undefined;
  posts: number;
}

export type Users = User[]; // Array<User>

export type loginData = {
  email: string;
  password: string;
};

// CONTEXT
export interface AppContext {
  user: User;
  setUser: Dispatch<SetStateAction<User>> | undefined;
  users: Users;
  registrationUser: ((data: User) => void) | undefined;
  loginUser: ((data: Partial<User>) => void) | undefined;
  componentToDisplay: "login" | "signIn" | undefined;
  setComponentToDisplay:
    | Dispatch<SetStateAction<"login" | "signIn">>
    | undefined;
  logOut: (() => void) | undefined;
  post: Post;
  setPost: Dispatch<SetStateAction<Post>> | undefined;
  posts: Posts;
  setPosts: Dispatch<SetStateAction<Posts>> | undefined;
  addPostLike: ((newLikedPost: Post) => void) | undefined;
  addPostUnlike: ((newUnlikedPost: Post) => void) | undefined;
  updatePost: ((postEditContent: Post) => void) | undefined;
}
