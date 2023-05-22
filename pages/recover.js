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
    <div>
      <h2>Restablecer contraseña</h2>
      <form onSubmit={handleResetPassword}>
        <div>
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <button type="submit">Enviar solicitud de restablecimiento</button>
      </form>
      {resetSent && (
        <p>
          Se ha enviado un correo electrónico para restablecer tu contraseña.
          Por favor, verifica tu bandeja de entrada.
        </p>
      )}
    </div>
  );
};

export default PasswordResetForm;