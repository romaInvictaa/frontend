import React, { useEffect, useState } from "react";
import Link from "next/link";

const Header = ({ user }) => {

    return (
        <div className="container mx-auto px-12 xl:px-16">
            <div className="md:border-b w-full inline-block border-dark-slate-blue py-2">
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
        </div>
    )
}

export default Header;