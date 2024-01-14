import Image from "next/image";
import Link from "next/link";

export default function Homepgae () {
  return (
    <>
      <div className="flex">
        <div className="flex items-center lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              WelCome to To Nib Insurance Web Based Vihecle Insurance Management System
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            NIC is one of the leading insurance companies in Ethiopia, with a strong market presence and a wide range of products and services. The company is committed to providing its customers with high-quality insurance services at competitive prices.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <Link
             href="/api/auth/signin"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md ">
                Get Started
              </Link>
            
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
            src="/insurance.jpg"
              width="616"
              height="700"
              className='ml-8'
              alt="Hero Illustration"
              loading="eager"
            />
          </div>
        </div>
      </div>
     
    </>
  );
}

