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
      <div>
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPosts />
          </Suspense>
        </div>
        <div>
          <AdminPostForm userId={session.user.id} />
        </div>
      </div>
      <div>
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminUsers />
          </Suspense>
        </div>
        <div>
          <AdminUserForm userId={session.user.id} />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
