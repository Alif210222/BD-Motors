
"use client"
import { registerUser } from '@/app/actions/auth/registerUser';
import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const RegisterForm = () => {
    const router = useRouter();


const handleSubmit = async(e) =>{
    e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      toast("Submitting...... ")

     const result = await registerUser({ name, email, password });

  if (result?.acknowledged) {
    // ✅ Redirect to home
    toast("Register successful")
    router.push("/products");
  } else {
    // 🚨 Optionally show error message
    toast("Registration failed or user already exists");
  }
   
}




    return (

         <div>
         
          <form onSubmit={handleSubmit} className="fieldset">
          <label className="label">Name</label>
          <input type="text" name="name"  className="input" placeholder="Enter your name" />
          <label className="label">Email</label>
          <input type="email" name="email"  className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button type='submit'  className="btn btn-neutral mt-4">Register </button>
        </form>

        <p className='text-center my-3'> or </p>

        <p className='text-red-500'>If already registerd  <span><Link href="/login" className='btn border ' > Go to Login </Link></span>  </p>

        

        </div>
    );
};

export default RegisterForm;