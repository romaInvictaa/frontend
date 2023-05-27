import React from "react";
import Link from "next/link";

const AccountCard = () => {
    return (
        <div className="absolute w-60 px-5 py-3 bg-cream-primary rounded-lg shadow border mt-12 -translate-x-44">
            <ul className="space-y-3 text-dark-slate-blue">
                <li className="font-medium">
                    <Link href="/profile" className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-indigo-700">
                        <div className="mr-3">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                        </div>
                        Tu perfil
                    </Link>
                </li>

                <hr className="border-dark-slate-blue" />

                <li className="font-medium">
                    <Link href="/login" className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-red-600">
                        <div className="mr-3 text-red-600">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                        </div>
                        Cerrar sesión
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default AccountCard;