"use client";
import { addUser } from "@/lib/actions";
import { React, useState } from "react";
import { useFormState } from "react-dom";
const AdminUserForm = () => {
  const [state, formAction] = useFormState(addUser, null);
  // const [formData, setFormData] = useState({
  //   username: "",
  //   email: "",
  //   password: "",
  //   isAdmin: false,
  // });
  // const handleChange = (e) => {
  //   const { name, value, type, checked } = e.target;
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     [name]: type === "checkbox" ? checked : value,
  //   }));
  // };
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await addUser(formData);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const router = useRouter();
  // useEffect(() => {
  //   state?.success && router.push("/");
  // }, [state?.success, router]);
  return (
    <>
      <h1 className="flex flex-col text-xl ">Add new User</h1>
      <form action={formAction} className="flex my-2 flex-col" >
        {/* <input
            type="hidden"
            name="userId"
            value={userId}
            onChange={handleChange}
          /> */}
        <input
          type="text"
          name="username"
          placeholder="Username"
          // value={formData.username}
          // onChange={handleChange}
          className="mb-2 p-4 rounded-md bg-cyan-900 text-white"
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          // value={formData.email}
          // onChange={handleChange}
          className="mb-2 p-4 rounded-md bg-cyan-900 text-white"
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          // value={formData.password}
          // onChange={handleChange}
          className="mb-2 p-4 rounded-md bg-cyan-900 text-white"
        />
        <select name="isAdmin" className="mb-2 p-4 rounded-md bg-cyan-900 text-white">
          <option value="false">User</option>
          <option value="true">Admin</option>
        </select>
        <button type="submit" className="p-4  bg-blue-800 rounded-lg font-bold">Add</button>
        {/* {state && state?.error} */}
      </form>
    </>
  );
};

export default AdminUserForm;
