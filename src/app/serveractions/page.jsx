import { addPost, deletePost } from "@/lib/actions";
import React from "react";

const Testserver = () => {
  return (
    <div>
      <form action={addPost} >
        <input type="text" name="title" />
        <input type="text" name="desc" />
        <input type="text" name="slug" />
        <input type="text" name="userId" />
        <button>Create</button>
      </form>
        <form action={deletePost} >
            <input type="text" name="id" placeholder="slug id" />
            <button>delete</button>
        </form>
    </div>
  );
};

export default Testserver;
