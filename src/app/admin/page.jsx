import AdminPostForm from "@/components/AdminPostForm/AdminPostForm";
import AdminPosts from "@/components/AdminPosts/AdminPosts";
import AdminUserForm from "@/components/AdminUserForm/AdminUserForm";
import AdminUsers from "@/components/AdminUsers/AdminUsers";
import { auth } from "@/lib/auth";
import React from "react";
import { Suspense } from "react";

const AdminPage = async () => {
  const session = await auth();
  // console.log(session);
  return (
    <div>
      <div className="flex justify-center " >
        <div className="flex-1 mr-10" >
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPosts />
          </Suspense>
        </div>
        <div className="flex-1" >
          <AdminPostForm userId={session.user.id} />
        </div>
      </div>
      <p className="bg-white p-0.5 my-10" ></p>
      <div className="flex justify-center ">
        <div className="flex-1 mr-10" >
          <Suspense fallback={<div>Loading...</div>}>
            <AdminUsers />
          </Suspense>
        </div>
        <div className="flex-1" >
          <AdminUserForm userId={session.user.id} />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
