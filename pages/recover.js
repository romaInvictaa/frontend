import React, { useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";

const PasswordResetForm = () => {
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState("");
  const [resetSent, setResetSent] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await resetPassword(email);
      setResetSent(true);
    } catch (error) {
      console.log("Error al restablecer la contraseña:", error);
    }
  };

  return (
    <div className="container">
      <div className="grid grid-cols-12 gap-12 bg-white w-fit min-[530px]:w-full sm:w-screen">
        <div className="col-span-12 lg:col-span-6 py-24 px-10 lg:px-20 lg:py-10 xl:px-28">
          <h1 className="text-4xl font-semibold mb-8">Reestablecer contraseña</h1>
          <form onSubmit={handleResetPassword} className="align-middle align-center">
            <div>
              <label className='text-lg' htmlFor="email">Correo electrónico:</label>
              <input
                className="mt-2 p-4 outline outline-gray-400 outline-1 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 focus:bg-gray-100 bg-white text-gray-700 mb-8"
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <button
              className="w-full mb-4 bg-orange-primary hover:bg-orange-secondary transition duration-500 text-white px-4 py-3 rounded-lg text-lg"
              type="submit"
            >
              Enviar
            </button>
          </form>
          {resetSent && (
            <div class="bg-orange-100 border-t-4 border-orange-500 rounded-b text-orange-900 px-4 py-3 shadow-md mt-4" role="alert">
              <div class="flex">
                <div class="py-1"><svg class="fill-current h-6 w-6 text-orange-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg></div>
                <div>
                  <p class="font-bold">Verificación</p>
                  <p class="text-sm">Se ha enviado un correo electrónico para restablecer tu contraseña.
                    Por favor, verifica tu bandeja de entrada.</p>
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

export default PasswordResetForm;