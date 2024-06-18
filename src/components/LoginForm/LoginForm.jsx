"use client";
import { handleGithubLogin, login } from "@/lib/actions";
import { React, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";
import { ConnectToDb } from "@/lib/utils";

const LoginForm = () => {
  const [state,formAction] = useFormState(login,undefined)
  const router = useRouter();
  useEffect(()=>{
    state?.success && router.push("/")
  },[state?.success,router])
  return (
    <>
      <div className="flex my-4">
        <form action={handleGithubLogin}>
          <button className="p-3 bg-white text-black rounded-lg ">
            Login with github
          </button>
        </form>
      </div>
      <div className="flex">
        <form action={formAction} className="flex flex-col">
          <input
            className="m-1 text-black p-3 rounded-md"
            type="text"
            name="username"
            placeholder="username"
            // value={formData.username}
            // onChange={handleChange}
          />
          <input
            className="m-1 text-black p-3 rounded-md"
            type="password"
            name="password"
            placeholder="password"
            // value={formData.password}
            // onChange={handleChange}
          />
          <button type="submit" className="p-4 bg-blue-700 rounded-xl my-3">
            Login
          </button>
        </form>
      </div>
      {state?.error}
      <Link href="/register">Don't have an Account? Register</Link>
    </>
  );
};

export default LoginForm;
