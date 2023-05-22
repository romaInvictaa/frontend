import React, { useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import Image from "next/image";

const LoginForm = () => {
  const auth = useAuth();
  console.log(auth);
  const { displayName } = auth.user;
  console.log(displayName);
  const usuariomail = auth.user.email;
  console.log(usuariomail);
  const { login, loginWithGoogle } = useAuth();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // const [registerEmail, setRegisterEmail] = useState("");
  // const [registerPassword, setRegisterPassword] = useState("");

  const handleLoginEmailChange = (e) => {
    setLoginEmail(e.target.value);
  };

  const handleLoginPasswordChange = (e) => {
    setLoginPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    login(loginEmail, loginPassword);
  };

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    loginWithGoogle();
  };

  const handleLogout = (e) => {
    e.preventDefault();
    auth.logout();
  };

  return (
    <div className="container p-8 rounded-3xl bg-gray-500 mt-10 ml-10 mr-10">
      <div className="grid grid-cols-12 gap-12 ml-10">
        <div className="lg:col-span-6 sm:col-span-12">
          {displayName && <h1>Bienvenido {displayName}</h1>}
          <h2>Iniciar sesión</h2>
          <form onSubmit={handleLogin}>
            <div>
              <label htmlFor="login-email">Correo electrónico:</label>
              <input
                className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
                type="email"
                id="login-email"
                required
                value={loginEmail}
                onChange={handleLoginEmailChange}
              />
            </div>
            <div>
              <label htmlFor="login-password">Contraseña:</label>
              <input
                className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
                required
                type="password"
                id="login-password"
                value={loginPassword}
                onChange={handleLoginPasswordChange}
              />
            </div>
            <button
              className="mt-2 ml-5 mb-5 align-middle align-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Iniciar sesión
            </button>
            <button
              onClick={handleLogout}
              className="mt-2 ml-5 mb-5 align-middle align-center bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Logout
            </button>
          </form>
          <div className="w-full flex justify-center items-center">
            <button
              className="mb-5 align-middle align-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleGoogleLogin}
            >
              Iniciar sesión con Google
            </button>
          </div>
        </div>
        <div className="lg:col-span-6 sm:col-span-12 h-full">
          <img src="/bg2.png" width={350}  alt="login" />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
