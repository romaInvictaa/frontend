import { auth } from "../firebase/firebase.config";
import { useState, useEffect } from "react";
import React, { createContext, useContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  sendEmailVerification,
  sendPasswordResetEmail,
  onAuthStateChanged,
} from "firebase/auth";

// restablecimiento de contraseña
const resetPassword = async (email) => {
  await sendPasswordResetEmail(auth, email);
};


export const AuthContext = createContext();
//console.log("AuthContext", AuthContext);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    console.error("useAuth must be used within an AuthProvider");
  }
  // console.log("contexto", context);
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState("");
  useEffect(() => {
    const registrado = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        console.log("no hay usuario");
      } else {
        setUser(currentUser);
      }
    });
    return () => registrado();
  }, []);

  // registro manual
  const register = async (email, password) => {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    if (response.user) {
      sendEmailVerification(auth.currentUser)
        .then(() => {
          console.log("Se ha enviado un correo electrónico de verificación");
        })
        .catch((error) => {
          console.error(
            "Error al enviar el correo electrónico de verificación:",
            error
          );
        });
    }
    //console.log(response);
  };

  // inicio de sesion manual
  const login = async (email, password) => {
    const response = await signInWithEmailAndPassword(auth, email, password);
    //console.log(response);
  };

  // inicio de sesion con google
  const loginWithGoogle = async () => {
    const responseGoogle = new GoogleAuthProvider();
    return await signInWithPopup(auth, responseGoogle);
  };

  // cerrar sesion
  const logout = async () => {
    const response = await signOut(auth);
    window.location.reload();
    //console.log(response);
  };

  return (
    <AuthContext.Provider
      value={{ register, login, loginWithGoogle, resetPassword, logout, user }}
    >
      {children}
    </AuthContext.Provider>
  );
}
