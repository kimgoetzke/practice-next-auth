import React from "react";
import Link from "next/link"

export default function Navbar() {
    return (
        <>
            <nav className="relative w-screen flex flex-wrap justify-center items-center place-content-center pt-7 pb-2 mb-9 bg-gradient-to-r from-sky-500 via-indigo-500 to-pink-500 shadow-xl">
                <div className="container w-6/12 grid grid-cols-3 gap-1 justify-items-center justify-center">
                    <div className=""> 
                    {/* px-8 py-1 rounded-lg hover:bg-pink-500 justify-center transition duration-700 ease-in-out */}
                        <a className="navbar-item group/navbar-item" href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="navbar-item">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>
                            <span className="invisible group-hover/navbar-item:visible justify-center">Home</span>
                        </a>
                    </div>
                    <div>
                        <a className="navbar-item group/navbar-item mx-auto" href="/protected">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="navbar-item">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                            </svg>
                            <span className="invisible group-hover/navbar-item:visible">Protected</span>
                        </a>
                    </div>
                    <div>
                        <a className="navbar-item group/navbar-item" href="/endpoints">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="navbar-item">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                            </svg>
                            <span className="invisible group-hover/navbar-item:visible">Endpoints</span>
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
}