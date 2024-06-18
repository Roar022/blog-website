import { deleteUser } from "@/lib/actions";
import { getUsers } from "@/lib/data";
import Image from "next/image";
import React from "react";

const AdminUsers = async () => {
  const users = await getUsers();
  return (
    <div>
      <h1 className="text-2xl font-bold">Users</h1>
      {users &&
        users.map((user) => (
          <div key={user.id}>
            <div>
              <Image
                src={"/noavatar.png"}
                // src={user.img || "/noAvatar.png"}
                alt=""
                height={50}
                width={50}
              />
              <span>{user.title}</span>
            </div>
            {/* <form action={() => deleteuserWithId(user.id)}> */}
            <form action={deleteUser}>
              <input type="hidden" name="id" value={user.id} />
              <button>Delete</button>
            </form>
          </div>
        ))}
    </div>
  );
};

export default AdminUsers;
