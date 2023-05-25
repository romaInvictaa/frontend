import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext.jsx";


//const { REGISTER_URL } = process.env;
const REGISTER_URL = "http://localhost:4000/users/";

const RegisterForm = () => {
  console.log(REGISTER_URL);
  const { register } = useAuth();
  const [user_name, setUser_name] = useState("");
  const [user_lastname, setUser_lastname] = useState("");
  const [user_phone, setUser_phone] = useState("");
  const [user_city, setUser_city] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [verificationSent, setVerificationSent] = useState(false);

  const handleRegisterEmailChange = (e) => {
    setRegisterEmail(e.target.value);
  };

  const handleRegisterPasswordChange = (e) => {
    setRegisterPassword(e.target.value);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    register(registerEmail, registerPassword);
    setVerificationSent(true);
    registerUser();
  };

  useEffect(() => {
    setVerificationSent(false);
  }, [registerEmail]);

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  // registro de usuario en la base de datos con la url REGISTER_URL a excepcion del password que se registran en firebase
  const registerUser = async () => {
    console.log("Datos enviados a la base de datos:", {
      user_name: user_name,
      user_lastname: user_lastname,
      user_phone: user_phone,
      user_city: user_city,
      user_email: registerEmail,
    });
    const response = await fetch(REGISTER_URL, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_name: user_name,
        user_lastname: user_lastname,
        user_phone: user_phone,
        user_city: user_city,
        user_email: registerEmail,
      }),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="container">
      <div className="grid grid-cols-12 gap-12 bg-white w-fit min-[530px]:w-full sm:w-screen">
        <div className="col-span-12 lg:col-span-6 py-24 px-10 lg:px-20 lg:py-10 xl:px-28">
          <h1 className="text-4xl font-semibold mb-8">Registrarse</h1>
          <form onSubmit={handleRegister} className="align-middle align-center">
            {/* NOMBRE */}
            <div>
              <label className="text-lg">Nombre:</label>
              <input
                className="mt-2 p-4 outline outline-gray-400 outline-1 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 focus:bg-gray-100 bg-white text-gray-700 mb-8"
                required
                type="text"
                id="user_name"
                value={user_name}
                onChange={(e) => setUser_name(e.target.value)}
              />
            </div>
            {/* APELLIDO */}
            <div>
              <label className="text-lg">Apellido:</label>
              <input
                className="mt-2 p-4 outline outline-gray-400 outline-1 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 focus:bg-gray-100 bg-white text-gray-700 mb-8"
                required
                type="text"
                id="user_lastname"
                value={user_lastname}
                onChange={(e) => setUser_lastname(e.target.value)} // Corregir el evento onChange
              />
            </div>
            {/* Numero de Telefono */}
            <div>
              <label className="text-lg">Numero de Telefono:</label>
              <input
                className="mt-2 p-4 outline outline-gray-400 outline-1 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 focus:bg-gray-100 bg-white text-gray-700 mb-8"
                required
                type="number"
                id="user_phone"
                value={user_phone}
                onChange={(e) => setUser_phone(e.target.value)} // Corregir el evento onChange
              />
            </div>
            {/* CIUDAD */}
            <div>
              <label className="text-lg">Ciudad:</label>
              <input
                className="mt-2 p-4 outline outline-gray-400 outline-1 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 focus:bg-gray-100 bg-white text-gray-700 mb-8"
                required
                type="text"
                id="user_city"
                value={user_city}
                onChange={(e) => setUser_city(e.target.value)} // Corregir el evento onChange
              />
            </div>
            {/* EMAIL */}
            <div>
              <label className="text-lg" htmlFor="register-email">
                Correo electrónico:
              </label>
              <input
                className="mt-2 p-4 outline outline-gray-400 outline-1 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 focus:bg-gray-100 bg-white text-gray-700 mb-8"
                required
                type="email"
                id="register-email"
                value={registerEmail}
                onChange={handleRegisterEmailChange}
              />
            </div>
            <div className="relative">
              <label className="text-lg" htmlFor="register-password">
                Contraseña:
              </label>
              <input
                className="mt-2 p-4 outline outline-gray-400 outline-1 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 focus:bg-gray-100 bg-white text-gray-700 mb-8"
                required
                minLength={6}
                type="password"
                id="register-password"
                value={registerPassword}
                onChange={handleRegisterPasswordChange}
              />
              <button
                className="absolute inset-y-0 right-0 text-gray-600"
                onClick={togglePasswordVisibility}
              >
                {isPasswordVisible ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                )}
              </button>
            </div>
            <button
              className="w-full mb-4 bg-orange-primary hover:bg-orange-secondary transition duration-500 text-white px-4 py-3 rounded-lg text-lg"
              type="submit"
            >
              Registrarse
            </button>
          </form>
          {verificationSent && (
            <div
              class="bg-orange-100 border-t-4 border-orange-500 rounded-b text-orange-900 px-4 py-3 shadow-md mt-4"
              role="alert"
            >
              <div class="flex">
                <div class="py-1">
                  <svg
                    class="fill-current h-6 w-6 text-orange-500 mr-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                  </svg>
                </div>
                <div>
                  <p class="font-bold">Verificación</p>
                  <p class="text-sm">
                    Se ha enviado un correo electrónico de verificación. Por
                    favor, revisa tu correo.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="invisible lg:visible lg:col-span-6 flex justify-end">
          <img className="h-screen" src="/loginImg.png" alt="login" />
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
