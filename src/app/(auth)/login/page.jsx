import { handleGithubLogin } from "@/lib/actions";
import { auth, signIn } from "@/lib/auth";
import React from "react";

const Login = async () => {
  const session = await auth();
  console.log(session);

  return (
    <div className="items-center flex">
      <form action={handleGithubLogin}>
        <button className="p-3 bg-white text-black rounded-lg ">
          Login with github
        </button>
      </form>
    </div>
  );
};

export default Login;
