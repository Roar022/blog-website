"use client";
import { addPost } from "@/lib/actions";
// import openAi from "@/lib/openai";
import { useRouter } from "next/navigation";
import { React, useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { getGroqChatCompletion } from "@/lib/groq_ai";

const AdminPostForm = ({ userId }) => {
  const [state, formAction] = useFormState(addPost, undefined);
  const [formData, setFormData] = useState({
    userId: userId,
    title: "",
    desc: "",
    img: "",
    slug: "",
  });
  const[prompt,setPrompt] = useState("");
  const[promptMessage, setPromptMessage] = useState("");

  const handlePromptChange = (e) => {
    const { name, value } = e.target;
    setPrompt(value);
  };

  const handlePromptSubmit = async (e) => {
    e.preventDefault();
    try {
      const chatCompletion = await getGroqChatCompletion(prompt);
      // Print the completion returned by the LLM.
      setPromptMessage(chatCompletion.choices[0]?.message?.content || "");
      formData.desc=promptMessage;
      console.log(chatCompletion.choices[0]?.message?.content || "");
    } catch (error) {
      console.log(error);
    }
  };
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
      <h1 className="flex flex-col text-xl " >Add new Post</h1>
      <form  onSubmit={handlePromptSubmit}>
        <input
        type="text"
        name="prompt"
        placeholder="Prompt"
        value={prompt}
        onChange={handlePromptChange}
                  className="mb-2 p-4 rounded-md bg-cyan-900 text-white"
        />
        <button type="submit" className="p-4  bg-blue-800 rounded-lg font-bold" >Generate Description</button>
      </form>
      <form onSubmit={handleSubmit} className="flex my-2 flex-col" >
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
          className="mb-2 p-4 rounded-md bg-cyan-900 text-white"
        />
        <input
          type="text"
          name="slug"
          placeholder="Slug"
          value={formData.slug}
          onChange={handleChange}
          className="my-2 p-4 rounded-md bg-cyan-900 text-white"
        />
        <input
          type="text"
          name="img"
          placeholder="img"
          value={formData.img}
          onChange={handleChange}
          className="my-2 p-4 rounded-md bg-cyan-900 text-white"
        />
        <textarea
          type="text"
          name="desc"
          placeholder="description"
          value={formData.desc}
          onChange={handleChange}
          rows={10}
          className="my-2 p-4 rounded-md bg-cyan-900 text-white"
        />
        <button type="submit" className="p-4  bg-blue-800 rounded-lg font-bold" >Add</button>
        {state && state?.error}
      </form>
    </>
  );
};

export default AdminPostForm;

