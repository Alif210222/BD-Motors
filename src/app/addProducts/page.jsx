"use client"; // make it client component so events work

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const Page = () => {
    const router = useRouter()
   

  const [formData, setFormData] = useState({
    servicename: "",
    img: "",
    description: "",
    price: "",
  });

  // handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle form submit
  const submit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/services", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast("✅ Service added successfully!");
        setFormData({ name: "", img: "", description: "", price: "" }); // clear form
          router.push("/products");  
      } else {
       toast("❌ Failed to add service");
      }
    } catch (error) {
      console.error("Error:", error);
     toast("❌ Something went wrong");
    }
  };

  return (
    <div>
      <h1 className="text-3xl mt-6 text-center font-bold underline">
        Add service
      </h1>

      <div className="mt-10 flex justify-center items-center mb-20">
        <form
          onSubmit={submit}
          className="fieldset bg-base-300 border-base-300 rounded-box w-xl border p-4"
        >
          <legend className="fieldset-legend text-lg">Services Details</legend>

          <label className="label">Service name </label>
          <input
            type="text"
            name="servicename"
            value={formData.name}
            onChange={handleChange}
            className="input"
            placeholder="Service name"
            required
          />

          <label className="label">Service image</label>
          <input
          
            type="text"
            name="img"
            value={formData.img}
            onChange={handleChange}
            className="input"
            placeholder="Service image URL"
            required
          />

          <label className="label">Service Description</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="input"
            placeholder="Write service description"
            required
          />

          <label className="label">Service Cost </label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="input"
            placeholder="Service cost"
            required
          />

          <button
            type="submit"
            className="btn mt-10 mb-6 rounded-xl text-xl font-bold text-white p-2 border border-black bg-black"
          >
            Add Service
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
