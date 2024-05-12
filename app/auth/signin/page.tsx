"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { signIn } from "next-auth/react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { SubmitHandler, useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { z } from "zod"

interface Props{
  callbackUrl?: string
}

const FormSchema=z.object({
  email:z.string().email("Please enter your email address"),
  password:z.string({
    required_error:"Please enter valid password"
  })
})

type Input=z.infer<typeof FormSchema>

const signin=(props:Props)=>{

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router=useRouter();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const{register,handleSubmit,formState:{errors,isSubmitting}}=useForm<Input>({
    resolver:zodResolver(FormSchema),
  });

  const onSubmit:SubmitHandler<Input>=async (data)=>{
    const result=await signIn("credentials",{
      redirect:false,
      username:data.email,
      password:data.password,
    })
if(!result?.ok){
  toast.error("Sign Failed");
  return;
}
toast.success("Welcome to Nib Insurance");
router.push(props.callbackUrl? props.callbackUrl:"/")
  }

return(
<div className="flex h-screen bg-gradient-to-r from-yellow-950 via-pink-950 to-indigo-950">
<form className='m-auto my-12 flex w-1/3 flex-col p-4' onSubmit={handleSubmit(onSubmit)}>
<input 
{...register("email")}
type="text"
placeholder="Enter Your Email"
className="input input-bordered input-primary mb-2" 
/>
<input 
{...register("password")}
type="password"
placeholder="Enter Your Password"
className="input input-bordered input-primary mb-2" 
/>
<button 
className="btn btn-primary"
type="submit" 
disabled={isSubmitting}
>{isSubmitting ? "Sign In...":"Sign In"}</button>
<p className="text-white">You Don&apos;t Have An Account
<Link className="p-2 text-blue-900" href="/auth/signup">
  Sign Up
</Link>
</p>
</form>
</div>
)
}

export default signin