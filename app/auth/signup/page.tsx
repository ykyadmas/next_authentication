"use client"
import { registerUser } from '@/lib/action/AuthAction';
// import { registerUser } from '@/lib/action/AuthAction';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link'
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { z } from "zod";

const FormSchema=z.object({
    firstName:z.string()
    .min(5,"First Name Must be at Least 5 character")
    .max(20,"Max Characters Must be at least 20 characters"),
    lastName:z.string()
    .min(5,"Last Name Must be at least 5 character")
    .max(20,"Max Characters Must be at least 20 characters"),
    email:z.string()
    .email("please provide avalid email address"),
    password:z.string()
    .min(6,"password must be at least 6 characters")
    .max(20,"Max Characters Must be at least 20 characters"),
    confirmPassword:z.string()
    .min(6,"password must be at least 6 characters")
    .max(20,"Max Characters Must be at least 20 characters"),
}).refine(data=>data.password===data.confirmPassword,{
   message:"Password and confirm password does't match", 
   path:["confirmPassword"],
})

type Input=z.infer<typeof FormSchema>;

const signup = () => {
  const {register,handleSubmit,reset,formState:{errors}} = useForm<Input>({
    resolver:zodResolver(FormSchema),
  })

  const saveUser:SubmitHandler<Input>=async(data)=>{

    const {...user}=data;

    console.log(data);

   try {
    const result=await registerUser(user);
    console.log(result);
    toast.success("Successfully registered")
   } catch (error) {
    toast.error("Something went wrong")
    console.log(error);
   }
  };

  return (
    <section className='flex min-h-screen bg-slate-400'>
        <form  className='m-auto my-12 flex w-1/3 flex-col p-4' onSubmit={handleSubmit(saveUser)}>
        <input 
        {...register("firstName")}
        type="text" 
        placeholder="First Name here" 
        className="input input-bordered input-primary mb-2" 
        />
        <input 
       {...register("lastName")}
        type="text" 
        placeholder="Last Name here" 
        className="input input-bordered input-primary mb-2" 
        />
        <input 
        {...register("email")}
        type="email" 
        placeholder="enter your email address" 
        className="input input-bordered input-primary mb-2" 
        />
        <input 
        {...register("password")}
        type="password" 
        placeholder="Enter your Password here" 
        className="input input-bordered input-primary mb-2" 
        />
        <input 
        {...register("confirmPassword")}
        type="password" 
        placeholder="Cornfirm Password" 
        className="input input-bordered input-primary mb-2" 
        />
        <button type="submit" className='btn btn-primary'>Sign up</button>
        <div className='flex flex-col items-center'>
        <p className='mt-0 text-white'>Already Signed up
        <Link href="/api/auth/signin" className='p-3 text-blue-800 underline'>Sign In</Link>
        </p>
        
    </div>
        </form>
        
    </section>
  )
}

export default signup