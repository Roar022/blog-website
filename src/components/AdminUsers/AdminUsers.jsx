import { deleteUser } from "@/lib/actions";
import { getUsers } from "@/lib/data";
import Image from "next/image";
import React from "react";

const AdminUsers = async () => {
  const users = await getUsers();
  // console.log(users);
  return (
    <div>
      <h1 className="text-2xl font-bold">Users</h1>
      {users &&
        users.map((user) => (
          <div className="flex my-3 justify-between" key={user.id}>
            <div className="flex justify-between space-x-4" >
              <Image
                src={"/noavatar.png"}
                // src={user.img || "/noAvatar.png"}
                alt=""
                height={50}
                width={50}
                className="rounded-full"
              />
              <span className="content-center" >{user.username}</span>
            </div>
            {/* <form action={() => deleteuserWithId(user.id)}> */}
            <form action={deleteUser}>
              <input type="hidden" name="id" value={user.id} />
              <button className="bg-red-800 p-2 rounded-xl" >Delete</button>
            </form>
          </div>
        ))}
    </div>
  );
};

export default AdminUsers;
