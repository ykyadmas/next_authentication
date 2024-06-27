import Image from 'next/image'
import React from 'react'


const About =()=>{

  return (
    <section className="bg-gradient-to-br from-gray-500 via-red-400 to-yellow-400 text-white" id="about">
        <p className='flex justify-center text-3xl font-bold text-black'>About Us</p>
      <div className="items-center gap-8 px-4 py-8 md:grid md:grid-cols-2">
       <div>
        <h1 className='font-bold text-black'>Establishment</h1>
        <p className='text-black'>
        Nib Insurance Company (NIC) was established by 658 shareholders with an 
        authorized capital of Birr 50.0 million and a Paid-Up Capital of Birr 14.0 
        million in May 02, 2002 with 4 branches in Addis Ababa and a total staff size 
        of not more than 50. Currently, the paid up capital has reached to Birr 250 million 
        and the number of shareholders increased to 1,014. NIC provides both General (Non-Life) 
        Insurance and Life Assurance Services to its clients.
        </p>
       </div>
        <div className="mt-4 flex h-full flex-col text-left">
          <div className="mt-8 flex flex-row justify-start">
          
         <Image src="/insurance2.png" alt="image" width={500} height={500}/>
          </div>
        
        </div>
      </div>
      <div className="items-center gap-4 sm:py-16 md:grid md:grid-cols-2 xl:gap-16 xl:px-16">
       <div>
       <Image className='bg-black' src="/mession.jpg" alt="image" width={800} height={400}/>

       
       </div>
        <div className="flex h-full flex-col text-left">
         
        <h1 className='font-bold text-black'>Mission</h1>
        <p className='text-black'>
        To provide reliable and quality Insurance service 
        and maximize its profitability, attain sustainable growth, 
        build its assets, invest and support the overall growth of 
        the country.
        </p>
          <div className="mt-8 flex flex-row justify-start">
          
          </div>
        </div>
      </div>

    </section>
  );
};

export default About;