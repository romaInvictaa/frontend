import { auth } from "../firebase/firebase.config";
import { useState, useEffect } from "react";
import React, { createContext, useContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

export const AuthContext = createContext();
console.log("AuthContext", AuthContext);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    console.error("useAuth must be used within an AuthProvider");
  }
  console.log("contexto", context);
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

  // registro de usuario
  const register = async (email, password) => {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(response);
  };
  // inicio de sesion manual
  const login = async (email, password) => {
    const response = await signInWithEmailAndPassword(auth, email, password);
    console.log(response);
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
    console.log(response);
  };

  return (
    <AuthContext.Provider
      value={{ register, login, loginWithGoogle, logout, user }}
    >
      {children}
    </AuthContext.Provider>
  );
}
