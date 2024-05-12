"use client"
import { zodResolver } from '@hookform/resolvers/zod';
import { messageValidationSchema } from './messageValidationSchema';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod'
import axios from 'axios';
import { useState } from 'react';


type MessageForm=z.infer<typeof messageValidationSchema>


const Contact = () => {
  const router=useRouter();
  const {register,handleSubmit,formState:{isSubmitting}}=useForm<MessageForm>({
    resolver:zodResolver(messageValidationSchema)
  });
  const [error,setError]=useState('');

  const onSubmitMessage=handleSubmit(async (data)=>{
    try {
    await axios.post('/api/message',data);
    router.push('/');
    router.refresh();          
    } catch (error) {
        setError("An expected error occurred.");
    }
    })

  return (
    <section className="bg-white dark:bg-gray-900" id='contact'>
  <div className="mx-auto max-w-screen-md px-4 py-8 lg:py-16">
      <h2 className="mb-4 text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">Contact Us</h2>
      <p className="mb-8 text-center font-light text-gray-500 sm:text-xl lg:mb-16 dark:text-gray-400">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
      <form onSubmit={onSubmitMessage} className="space-y-8">
          <div>
              <label className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input 
              {...register('subject')}
              type="text" className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400" placeholder="Let us know how we can help you" required/>
          </div>
          <div className="sm:col-span-2">
              <label  className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea 
               {...register('sentMessage')}
              rows="6" className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" 
          disabled={isSubmitting}
          className="hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 rounded-lg bg-gray-400 px-5 py-3 text-center text-sm font-medium text-black focus:outline-none focus:ring-4 sm:w-fit">{isSubmitting ? "Submit Message...":"Submit"}</button>
      </form>
  </div>
</section>
  )
}

export default Contact
