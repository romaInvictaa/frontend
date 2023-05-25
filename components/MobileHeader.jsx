import React, { useEffect, useState } from "react";
import Link from "next/link";

const Header = ({ user }) => {

    return (
        <div className="container mx-auto px-12 xl:px-16">
            <div className="md:border-b w-full inline-block border-dark-slate-blue py-2">

                <div className="float-right align-middle translate-y-3 md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </div>

                {user ? (
                    <div className="hidden md:float-left md:contents">
                        <img
                            src="/profileIcon.png"
                            alt="logo"
                            className="md:float-right align-middle text-black ml-6 font-semibold cursor-pointer"
                            width={40} />
                        <span className="md:float-right mt-2 align-middle text-black ml-6 font-semibold cursor-pointer">
                            {user.name}
                        </span>
                    </div>
                ) : (
                    <div className="hidden md:float-left md:contents">
                        <img
                            src="/profileIcon.png"
                            alt="logo"
                            className="md:float-right align-middle text-black ml-6 font-semibold cursor-pointer"
                            width={55} />
                        <Link href="/login">
                            <span className="md:float-right mt-2 align-middle text-dark-slate-blue ml-4 font-semibold cursor-pointer bg-cream-primary border border-cream-primary rounded-full px-4 py-2 transition duration-300 hover:bg-dark-slate-blue hover:text-light-gray hover:border-dark-slate-blue">
                                Ingresar
                            </span>
                        </Link>
                        <Link href="/register">
                            <span className="md:float-right mt-2 align-middle text-dark-slate-blue ml-4 font-semibold cursor-pointer border border-dark-slate-blue px-4 py-2 rounded-full transition duration-300 hover:bg-dark-slate-blue hover:text-light-gray">
                                Regístrate
                            </span>
                        </Link>
                    </div>
                )}
            </div>
            {showMenu ? (
                <div className="md:hidden bg-dark-slate-blue w-screen -translate-x-12">
                    <div className="flex inline-block">
                        <Link href="/login">
                            <span className="text-light-gray font-semibold text-lg cursor-pointer hover:text-cream-primary transition duration-300">
                                Ingresar
                            </span>
                        </Link>
                        <Link href="/register">
                            <span className="text-light-gray font-semibold text-lg cursor-pointer hover:text-cream-primary transition duration-300">
                                Regístrate
                            </span>
                        </Link>
                    </div>
                </div>
            ) : (
                <div></div>
            )}
        </div>
    )
}

export default Header;