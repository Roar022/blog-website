import { ConnectToDb } from "./utils";
import { Post, User } from "./models";

export const getPosts = async () => {
  try {
    await ConnectToDb();
    const posts = await Post.find();
    if (!posts) {
      throw new Error("No Posts");
    }
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts");
  }
};

export const getPost = async (slug) => {
  try {
    await ConnectToDb();
    const post = await Post.find(slug);
    if (!post) {
      throw new Error("No Post");
    }
    return post;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch post");
  }
};

export const getUser = async (id) => {
  try {
    await ConnectToDb();
    const user = await User.findById(id);
    if (!user) {
      throw new Error("No User Find");
    }
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch user");
  }
};

export const getUsers = async () => {
  try {
    await ConnectToDb();
    const users = await User.find();
    if (!users) {
      throw new Error("No Users");
    }
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch user");
  }
};
