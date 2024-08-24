"use client"
import { register } from "@/lib/actions";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useFormState } from "react-dom";
import { useEffect } from "react";

const RegisterForm = () => {
  const [state,formAction] = useFormState(register,undefined)
  const router = useRouter();
  useEffect(()=>{
    state?.success && router.push("/login")
  },[state?.success,router])
  return (
    <form
      className=" rounded-lg items-center flex flex-col p-3"
      action={formAction}
    >
      <input
        className="p-3 m-1 rounded-md"
        type="text"
        placeholder="username"
        name="username"
      />
      <input
        className="p-3 m-1 rounded-md"
        type="email"
        placeholder="email"
        name="email"
      />
      <input
        className="p-3 m-1 rounded-md"
        type="password"
        placeholder="password"
        name="password"
      />
      <input
        className="p-3 m-1 rounded-md"
        type="password"
        placeholder="password again"
        name="passwordRepeat"
      />
      <button className="bg-blue-700 p-3 m-2 rounded-lg" type="submit">
        Register
      </button>
      <p  className="bg-red-200 text-red-900 px-2 rounded-xl my-2" >

      {state?.error}
      </p>
      <Link href="/login" className="text-white" >
      Have an Account? Login</Link>
    </form>
  );
};

export default RegisterForm;
