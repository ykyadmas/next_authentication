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

  const router=useRouter();

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
router.push(props.callbackUrl? props.callbackUrl:"/")
  }

return(
<section className="flex max-h-fit bg-gradient-to-br from-yellow-950 to-indigo-950 via-pink-950">
<form className='flex flex-col m-auto my-12 p-4 w-1/3' onSubmit={handleSubmit(onSubmit)}>
<input 
{...register("email")}
type="text"
placeholder="Enter Your Email"
className="input input-bordered input-primary mb-2" 
/>
<input 
{...register("password")}
type="password"
placeholder="Enter Your Email"
className="input input-bordered input-primary mb-2" 
/>
<button 
className="btn btn-primary"
type="submit" 
disabled={isSubmitting}
>{isSubmitting ? "Sign In...":"Sign In"}</button>
<p>You Don't Have An Account
<Link className="text-blue-900 p-2" href="/auth/signup">
  Sign Up</Link>
</p>
</form>
</section>
)
}

export default signin