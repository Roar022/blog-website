"use client";
import { addPost } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { React, useEffect, useState } from "react";
import { useFormState } from "react-dom";

const AdminPostForm = ({ userId }) => {
  // const [state, formAction] = useFormState(addPost, undefined);
  const [formData, setFormData] = useState({
    userId: userId,
    title: "",
    desc: "",
    img: "",
    slug: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addPost(formData);
    } catch (error) {
      console.log(error);
    }
  };
  // const router = useRouter();
  // useEffect(() => {
  //   state?.success && router.push("/");
  // }, [state?.success, router]);
  return (
    <>
      <h1>Add new Post</h1>
      <form onSubmit={handleSubmit}>
        {/* <input
          type="hidden"
          name="userId"
          value={userId}
          onChange={handleChange}
        /> */}
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="slug"
          placeholder="Slug"
          value={formData.slug}
          onChange={handleChange}
        />
        <input
          type="text"
          name="img"
          placeholder="img"
          value={formData.img}
          onChange={handleChange}
        />
        <textarea
          type="text"
          name="desc"
          placeholder="description"
          value={formData.desc}
          onChange={handleChange}
          rows={10}
        />
        <button type="submit">Add</button>
        {/* {state && state?.error} */}
      </form>
    </>
  );
};

export default AdminPostForm;

