import { signIn } from "@/lib/auth";
import React from "react";

const handleGithubLogin = async () => {
  "use server";
  await signIn("github");
};

const Login = () => {
  return (
    <div>
      <form action={handleGithubLogin}>
        <button>Login with github</button>
      </form>
    </div>
  );
};

export default Login;
