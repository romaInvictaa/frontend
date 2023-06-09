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
  FacebookAuthProvider,
} from "firebase/auth";

// restablecimiento de contraseña
const resetPassword = async (email) => {
  await sendPasswordResetEmail(auth, email);
};

export const AuthContext = createContext();
//console.log("AuthContext", AuthContext);

// hook para usar el contexto
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    console.error("useAuth must be used within an AuthProvider");
  }
  // console.log("contexto", context);
  return context;
};

// proveedor del contexto de autenticacion
export function AuthProvider({ children }) {
  const [user, setUser] = useState("");
  useEffect(() => {
    const registrado = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        //console.log("no hay usuario");
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
          //console.log("Se ha enviado un correo electrónico de verificación");
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
    // return await signInWithPopup(auth, responseGoogle);
    const xd = await signInWithPopup(auth, responseGoogle);
    console.log(xd);
    registerUser(xd.user.displayName, xd.user.email);
    return xd;
  };

  // inicio de sesion con facebook
  const loginWithFacebook = async () => {
    // login abre en otra pestaña
    const responseFacebook = new FacebookAuthProvider();
    try {
      const xd = await signInWithPopup(auth, responseFacebook);
      console.log(xd);
      registerUser(xd.user.displayName, xd.user.email);
      return xd;
    } catch (error) {
      console.log(error);
    }
  };

  // traer usuario de google y enviarlo a la base de datos
  const registerUser = async (displayName, email) => {
    //console.log("nombre", displayName,"email", email);
    const response = await fetch("/api/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_name: displayName,
        user_email: email,
        history: "0",
        art: "0",
        architecture: "0",
      }),
    });
    const data = await response.json();
    console.log(data);
  };

  // cerrar sesion
  const logout = async () => {
    const response = await signOut(auth);
    //window.location.reload();
    //console.log(response);
  };

  return (
    <AuthContext.Provider
      value={{
        register,
        login,
        loginWithGoogle,
        resetPassword,
        loginWithFacebook,
        logout,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
