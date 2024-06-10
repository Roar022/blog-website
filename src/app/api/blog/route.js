import { Post } from "@/lib/models";
import { ConnectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET=async(req,res)=>{
    try {
        ConnectToDb();
        const posts= await Post.find();
        if(!posts){
            throw new Error("No posts")
        }
        return NextResponse.json(posts);
        
    } catch (error) {
        console.log(error);
        throw new Error("Something went wrong")
    }
}