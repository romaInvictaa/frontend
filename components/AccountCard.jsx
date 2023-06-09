import React from "react";
import Link from "next/link";
import Router from "next/router";

const AccountCard = ({ auth }) => {

    const handleLogout = (e) => {
        e.preventDefault();
        auth.logout();
        Router.push("/login");
    };
    

    return (
        <div className="absolute w-60 px-5 py-3 bg-cream-primary rounded-lg shadow border mt-12 -translate-x-44">
            <ul className="space-y-3 text-dark-slate-blue">
                <li className="font-medium">
                    <Link href="/profile" className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-indigo-700">
                        <div className="mr-3">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                        </div>
                        Tu perfil
                    </Link>
                </li>
                
                <li className="font-medium">
                    <Link href="/test" className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-indigo-700">
                        <div className="mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-ui-checks" viewBox="0 0 16 16">
                        <path d="M7 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zM2 1a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm0 8a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H2zm.854-3.646a.5.5 0 0 1-.708 0l-1-1a.5.5 0 1 1 .708-.708l.646.647 1.646-1.647a.5.5 0 1 1 .708.708l-2 2zm0 8a.5.5 0 0 1-.708 0l-1-1a.5.5 0 0 1 .708-.708l.646.647 1.646-1.647a.5.5 0 0 1 .708.708l-2 2zM7 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zm0-5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                        </div>
                        Test
                    </Link>
                </li>

                <hr className="border-dark-slate-blue" />

                <li className="font-medium">
                    <div className="flex cursor-pointer items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-red-600" onClick={handleLogout}>
                        <div className="mr-3 text-red-600">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                        </div>
                        Cerrar sesión
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default AccountCard;