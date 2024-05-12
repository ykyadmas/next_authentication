import Image from "next/image";
import Link from "next/link";

export default function Homepgae () {
  return (
    <>
      <div className="flex">
        <div className="flex items-center lg:w-1/2">
          <div className="mb-8 max-w-2xl">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              WelCome to To Nib Insurance Web Based Vihecle Insurance Management System
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            NIC is one of the leading insurance companies in Ethiopia, with a strong market presence and a wide range of products and services. The company is committed to providing its customers with high-quality insurance services at competitive prices.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0">
              <Link
             href="/api/auth/signin"
                className="rounded-md bg-indigo-600 px-8 py-4 text-center text-lg font-medium text-white ">
                Get Started
              </Link>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-center lg:w-1/2">
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

