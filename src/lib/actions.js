import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { ConnectToDb } from "./utils";

export const addPost = async (formdata) => {
  "use server";
  const { title, desc, userId, slug } = Object.fromEntries(formdata);
  try {
    ConnectToDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId
    });

    await newPost.save();
    // by auto server will cache data, to refresh data this is used 
    revalidatePath("/blog")
    console.log("save to db");
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
};

export const deletePost = async (formdata) => {
  "use server";
  const { id } = Object.fromEntries(formdata);
  try {
    // const {id}
    ConnectToDb();
    await Post.findByIdAndDelete(id);
    // by auto server will cache data, to refresh data this is used 
    console.log("deleted");
    revalidatePath("/blog")
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
};
