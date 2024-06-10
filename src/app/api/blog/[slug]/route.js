import { Post } from "@/lib/models";
import { ConnectToDb } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { slug } = params;

  try {
    await ConnectToDb();
    const post  =await Post.findOne({slug});
    if(!post){
        throw new Error("No Post")
    }
    return NextResponse.json(post);
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
};

export const DELETE = async (req, { params }) => {
  const { id } = params;

  try {
    await ConnectToDb();
    await Post.deleteOne(id);
    if(!post){
        throw new Error("No Post")
    }
    console.log("Deleted");
    return NextResponse.json("post Deleted ");
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong");
  }
};


