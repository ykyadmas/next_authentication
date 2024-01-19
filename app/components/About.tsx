import Image from 'next/image'
import React from 'react'


const About =()=>{

  return (
    <section className="text-white bg-gradient-to-br from-gray-500 to-yellow-400 via-red-400" id="about">
        <p className='flex text-black justify-center font-bold text-3xl'>About Us</p>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4">
       <div>
        <h1 className='text-black font-bold'>Establishment</h1>
        <p className='text-black'>
        Nib Insurance Company (NIC) was established by 658 shareholders with an 
        authorized capital of Birr 50.0 million and a Paid-Up Capital of Birr 14.0 
        million in May 02, 2002 with 4 branches in Addis Ababa and a total staff size 
        of not more than 50. Currently, the paid up capital has reached to Birr 250 million 
        and the number of shareholders increased to 1,014. NIC provides both General (Non-Life) 
        Insurance and Life Assurance Services to its clients.
        </p>
       </div>
        <div className="mt-4 text-left flex flex-col h-full">
          <div className="flex flex-row justify-start mt-8">
          
         <Image src="/insurance.jpg" alt="image" width={500} height={400}/>
          </div>
        
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 gap-4 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
       <div>
       <Image src="/insurance.jpg" alt="image" width={500} height={400}/>

       
       </div>
        <div className="text-left flex flex-col h-full">
         
        <h1 className='text-black font-bold'>Mission</h1>
        <p className='text-black'>
        To provide reliable and quality Insurance service 
        and maximize its profitability, attain sustainable growth, 
        build its assets, invest and support the overall growth of 
        the country.
        </p>
          <div className="flex flex-row justify-start mt-8">
          
          </div>
        </div>
      </div>

    </section>
  );
};

export default About;