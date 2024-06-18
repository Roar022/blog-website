"use server";
import { revalidatePath } from "next/cache";
import { Post, User } from "./models";
import { ConnectToDb } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";
import { redirect } from "next/dist/server/api-utils";

export const addPost = async (formdata) => {
  console.log(formdata);
  const { title, desc, userId, slug, img } = (formdata);
  try {
    ConnectToDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
      img,
    });

    await newPost.save();
    // by auto server will cache data, to refresh data this is used
    revalidatePath("/blog");
    revalidatePath("/admin");
    console.log("save to db");
  } catch (error) {
    console.log(error);
    return {error:"Something went wrong"};
  }
};
export const addUser = async (prev,formdata) => {
  const { username, email, password, img } = Object.fromEntries(formdata);
  try {
    ConnectToDb();
    const newUser = new User({
      username,
      email,
      password,
      img,
    });

    await newUser.save();
    // by auto server will cache data, to refresh data this is used
    revalidatePath("/admin");
    console.log("save to db");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};

export const deleteUser = async (formdata) => {
  const { id } = Object.fromEntries(formdata);
  try {
    ConnectToDb();

    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    console.log("User deleted in db ");
    // by auto server will cache data, to refresh data this is used
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};

export const deletePost = async (formdata) => {
  //   "use server";
  const { id } = Object.fromEntries(formdata);
  try {
    // const {id}
    ConnectToDb();
    await Post.findByIdAndDelete(id);
    // by auto server will cache data, to refresh data this is used
    console.log("deleted");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};

export const handleGithubLogin = async () => {
  // "use server";
  await signIn("github");
  // revalidatePath("/login")
};
export const handleLogout = async () => {
  // "use server";
  await signOut();
};

export const register = async (prevstate, formdata) => {
  const { username, email, password, passwordRepeat, img } =
    Object.fromEntries(formdata);
  if (!password) {
    return { error: "Enter password" };
  }
  if (password !== passwordRepeat) {
    return { error: "Password does not match" };
  }

  try {
    await ConnectToDb();
    const user = await User.findOne({ username });
    if (user) {
      return { error: "user already exists" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      password: hashedPassword,
      email,
      img,
    });

    await newUser.save();
    console.log("save to db");
    return { success: true };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }
};

export const login = async (prev, formdata) => {
  const { username, password } = Object.fromEntries(formdata);
  try {
    await signIn("credentials", { username, password });
  } catch (error) {
    console.log(error);
    if (error.message.includes("CredentialsSignin")) {
      return { error: "Invalid username or password" };
    }
    if (error.message.includes("AccessDenied")) {
      return { error: "Access denied for auth" };
    }
    throw error;
  }
};
