"use client"

import React from 'react';
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import {  useSearchParams } from 'next/navigation';
import Link from 'next/link';


const LoginForm = () => {
      const router  = useRouter()
      const searchParams = useSearchParams();
const callbackUrl = searchParams.get("callbackUrl") || "/products";

    
         
    const handleSubmit = async(e)=>{
          e.preventDefault();

          const form = e.target;
          const email = form.email.value;
          const password = form.password.value;
          toast("submiting.....")

          try{
              const response =  await signIn("credentials", {
                  email,
                  password,
                  callbackUrl,
                  redirect: false,
                });
              if(response.ok){
                toast("login successfull")
                 router.push(response.url); // ✅ redirect to intended page
              }else{
                 toast.error("Authentication failed");
              }
            //    router.push("/")
             
          } catch (error){
           
         toast.error("Login failed");
          }
          

        //   console.log(email,password)
    }


    return (
        <div>
            <form onSubmit={handleSubmit} className="fieldset">
          <label className="label">Email</label>
          <input type="email" name="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
           </form>
            <p className='text-center my-3'> or </p>

        <p className='text-red-500'>If not registered  <span><Link href="/register" className='btn border ' > Go to Register  </Link></span>  </p>
        </div>
    );
};

export default LoginForm;