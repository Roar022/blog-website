import LoginForm from "@/components/LoginForm/LoginForm";
import { handleGithubLogin, login } from "@/lib/actions";
import { auth, signIn } from "@/lib/auth";
import React from "react";

const Login = () => {
  // const session = await auth();
  // console.log(session);

  return (
    <div className="items-center flex flex-col">
      <LoginForm/>
    </div>
  );
};

export default Login;
