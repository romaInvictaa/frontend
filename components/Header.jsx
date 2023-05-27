import React, { useState } from "react";
import Link from "next/link";
import { useAuth } from '../context/AuthContext.jsx';
import { AccountCard } from "./";

const Header = ({ slug }) => {

    const auth = useAuth();
    const user = auth.user;

    console.log(auth.user)
    // console.log(auth.user.email)

    const [showMenu, setShowMenu] = useState(false);
    const [profileMenu, setProfileMenu] = useState(false);

    return (
        <div className={showMenu ? "container mx-auto bg-dark-slate-blue" : "container mx-auto"}>
            <div className="md:border-b w-full inline-block border-dark-slate-blue py-2 px-12 xl:px-16">

                {/* Back button */}
                {/* {console.log(slug)} */}
                {slug ? (
                    <div className="hidden block md:contents">
                        <Link href={`${slug}`}>
                            <span className="md:float-left  mt-2 align-middle text-dark-slate-blue ml-4 font-semibold cursor-pointer bg-cream-primary border border-cream-primary rounded-full px-4 py-2 transition duration-300 hover:bg-dark-slate-blue hover:text-light-gray hover:border-dark-slate-blue">
                                Volver
                            </span>
                        </Link>
                    </div>
                ) : (
                    <div></div>
                )
                }


                <div className="float-right align-middle translate-y-3 md:hidden" onClick={() => setShowMenu(!showMenu)}>

                    {showMenu ? (
                        <div className='translate-x-2 -translate-y-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="#E5E5E5" class="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </div>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    )
                    }

                </div>
                {user ? (
                    <div className="hidden md:float-left md:contents mt-8">
                        <img
                            src={user.photoURL ? user.photoURL : "/profileIcon.png"}
                            alt="logo"
                            className="md:float-right align-middle text-black ml-6 font-semibold cursor-pointer rounded-full mt-2"
                            width={40}
                            onClick={() => setProfileMenu(!profileMenu)}
                        />

                        {profileMenu ? (
                            <div className="md:float-right mt-2">
                                <AccountCard />
                            </div>
                        ) : (
                            <div></div>
                        )
                        }

                        <span className="md:float-right py-2 align-middle text-black ml-6 font-semibold cursor-pointer mt-2">
                            {user.displayName}
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
                user ? (
                    <div className="md:hidden bg-dark-slate-blue pb-4 mb-4">
                        <div className="flex justify-center">
                            <Link href="/login">
                                <span className="text-light-gray font-semibold text-2xl cursor-pointer hover:text-cream-primary transition duration-300">
                                    Perfil
                                </span>
                            </Link>
                        </div>
                        <div className="flex justify-center mt-4">
                            <Link href="/register">
                                <span className="text-light-gray font-semibold text-2xl cursor-pointer hover:text-cream-primary transition duration-300">
                                    Cerrar sesión
                                </span>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <div className="md:hidden bg-dark-slate-blue pb-4 mb-4">
                        <div className="flex justify-center">
                            <Link href="/login">
                                <span className="text-light-gray font-semibold text-2xl cursor-pointer hover:text-cream-primary transition duration-300">
                                    Ingresar
                                </span>
                            </Link>
                        </div>
                        <div className="flex justify-center mt-4">
                            <Link href="/register">
                                <span className="text-light-gray font-semibold text-2xl cursor-pointer hover:text-cream-primary transition duration-300">
                                    Regístrate
                                </span>
                            </Link>
                        </div>
                    </div>
                )
                // <div className="md:hidden bg-dark-slate-blue pb-4 mb-4">
                //     <div className="flex justify-center">
                //         <Link href="/login">
                //             <span className="text-light-gray font-semibold text-2xl cursor-pointer hover:text-cream-primary transition duration-300">
                //                 Ingresar
                //             </span>
                //         </Link>
                //     </div>
                //     <div className="flex justify-center mt-4">
                //         <Link href="/register">
                //             <span className="text-light-gray font-semibold text-2xl cursor-pointer hover:text-cream-primary transition duration-300">
                //                 Regístrate
                //             </span>
                //         </Link>
                //     </div>
                // </div>
            ) : (
                <div></div>
            )}

        </div>
    )
}

export default Header;