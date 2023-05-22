import React, { useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";

const RegisterForm = () => {
  const { register } = useAuth();
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const handleRegisterEmailChange = (e) => {
    setRegisterEmail(e.target.value);
  };

  const handleRegisterPasswordChange = (e) => {
    setRegisterPassword(e.target.value);
  };
  const handleRegister = (e) => {
    e.preventDefault();
    register(registerEmail, registerPassword);
  };

  return (
    <div>
      <h2>Registrarse</h2>
      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor="register-email">Correo electrónico:</label>
          <input
            className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
            required
            type="email"
            id="register-email"
            value={registerEmail}
            onChange={handleRegisterEmailChange}
          />
        </div>
        <div>
          <label htmlFor="register-password">Contraseña:</label>
          <input
            className="p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
            required
            type="password"
            id="register-password"
            value={registerPassword}
            onChange={handleRegisterPasswordChange}
          />
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};
export default RegisterForm;
