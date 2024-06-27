"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import HeroSection from "./HeroSection";
import ProjectCard from "./ProjectCard";
import Footer from "./Footer";
import About from "./About";
import Contact from "./Contact";
import Location from "./Location";
import Image from "next/image";

export default function SignIn({engineerSurveyId}:{engineerSurveyId:number}) {
  const { data: session } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      {session && session.user ? (
        <div>
          <div className="sticky-navbar flex items-center justify-between bg-gray-500">
            <div className="mr-auto">
              <Image
                className="bg-slate-300"
                alt="Insurance"
                src="/icons/insurance.svg"
                width={60}
                height={80}
                
              />
            </div>

            {isMobile ? (
              <div>
                {/* Hamburger Menu for Small Devices */}
                <button className="btn btn-circle btn-ghost" onClick={toggleMenu}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h7"
                    />
                  </svg>
                </button>
                {menuOpen && (
                  <ul className="menu dropdown-content z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow">
                    {session.user?.role === "SURVEYENGINEER" && (
                      <li><Link href="/admin">Survey Evaluater</Link></li>
                    )}
                    {session.user?.role === "CLAIMADJUSTER" && (
                      <li><Link href="/claimAdjuster">Claim Adjuster</Link></li>
                    )}
                    {session.user?.role === "INSURANCEOFFICER" && (
                      <li><Link href="/insuranceOfficer">Insurance Officer</Link></li>
                    )}
                    {session.user?.role === "DAMAGEEVALUATER" && (
                      <li><Link href="/damageEvaluator">Damage Evaluator</Link></li>
                    )}
                    <li><Link href="#home">Home</Link></li>
                    <li><Link href="#about">About</Link></li>
                    <li><Link href="#proposal">Proposals</Link></li>
                    <li><Link href="#contact">Contact</Link></li>
                    <li><Link href="/myAccount">My Account</Link></li>
                    
                    <li><Link href="/api/auth/signout">Signout</Link></li>
                  </ul>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-4">
                {/* Navigation Links for Large Devices */}
                {session.user?.role === "SURVEYENGINEER" && (
                  <Link className="btn btn-primary" href="/admin">Survey Evaluater</Link>
                )}
                {session.user?.role === "CLAIMADJUSTER" && (
                  <Link className="btn btn-primary" href="/claimAdjuster">Claim Adjuster</Link>
                )}
                {session.user?.role === "INSURANCEOFFICER" && (
                  <Link className="btn btn-primary" href="/insuranceOfficer">Insurance Officer</Link>
                )}
                {session.user?.role === "DAMAGEEVALUATER" && (
                  <Link className="btn btn-primary" href="/damageEvaluator">Damage Evaluator</Link>
                )}
                <Link href="#home" className="text-white">Home</Link>
                <Link href="#about" className="text-white">About</Link>
                <Link href="#proposal" className="text-white">Proposals</Link>
                <Link href="#contact" className="text-white">Contact</Link>
                <Link href="/myAccount" className="btn btn-warning mt-1 text-white">My Account</Link>
               
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="btn m-1 rounded-full">
                    {session.user.firstName}
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow"
                  >
                    <li>
                      <p>{`${session.user.firstName} ${session.user.lastName}`}</p>
                    </li>
                    <li><Link href="/api/auth/signout">Signout</Link></li>
                  </ul>
                </div>
              </div>
            )}
          </div>
          <HeroSection />
          <About />
          <ProjectCard />
          <Contact />
          <Location />
          <Footer />
        </div>
      ) : (
        <div>
          <div className="sticky-navbar flex justify-end gap-4 bg-gray-500">
            <Link href="#home" className="mt-1 text-white">Home</Link>
            <Link href="#about" className="mt-1 text-white">About</Link>
            <Link href="#proposal" className="mt-1 text-white">Proposals</Link>
            <Link href="#contact" className="mt-1 text-white">Contact</Link>
            <div className="flex justify-end gap-4 bg-gray-500">
              <Link href="/auth/signup" className="btn btn-primary">Sign up</Link>
              <Link href="/api/auth/signin" className="btn btn-primary">Sign in</Link>
            </div>
          </div>
          <HeroSection />
          <About />
          <ProjectCard />
          <Contact />
          <Location />
          <Footer />
        </div>
      )}
    </div>
  );
}
