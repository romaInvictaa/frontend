import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext.jsx';
import Link from 'next/link';
import { useRouter } from 'next/router';

const REGISTER_URL = "/api/users/";

const LoginForm = () => {

  const auth = useAuth();
  //console.log("auth", auth);

  const [error, setError] = useState(null);

  const [ displayName, setDisplayName ] = useState(auth.user.displayName);
  const [ email, setEmail ] = useState(auth.user.email);

  useEffect(() => {
    if (auth.user) {
      setDisplayName(auth.user.displayName);
      setEmail(auth.user.email);
    }
  }, [auth.user]);

  const { login, loginWithGoogle } = useAuth();
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const router = useRouter();

  const handleLoginEmailChange = (e) => {
    setLoginEmail(e.target.value);
  };

  const handleLoginPasswordChange = (e) => {
    setLoginPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(loginEmail, loginPassword);
      router.push('/');
    } catch (error) {
      setError('Usuario o contraseña inválidos');
    }
  };

  const handleGoogleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginWithGoogle();
      router.push('/');
    } catch (error) {
      setError('Usuario o contraseña inválidos');
    }
  };
  

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }
  
  return (
    <div className="container">
      <div className="grid grid-cols-12 gap-12 bg-white w-fit min-[530px]:w-full sm:w-screen">
        <div className="col-span-12 lg:col-span-6 py-24 px-10 lg:px-20 lg:py-10 xl:px-28">
        <h1 className="text-4xl font-semibold mb-8">Roma Invicta</h1>
          <h2 className="text-2xl font-semibold mb-8">Iniciar sesión</h2>
          <form onSubmit={handleLogin} className="align-middle align-center">
            <div>
              <label className="text-lg" htmlFor="login-email">
                Correo electrónico
              </label>
              <input
                className="mt-2 p-4 outline outline-gray-400 outline-1 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 focus:bg-gray-100 bg-white text-gray-700 mb-8"
                type="email"
                id="login-email"
                required
                value={loginEmail}
                onChange={handleLoginEmailChange}
                data-testid="email"
              />
            </div>
            <div className="relative">
              <label className="text-lg" htmlFor="login-password">
                Contraseña
              </label>
              <input
                className="mt-2 p-4 outline outline-gray-400 outline-1 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 focus:bg-gray-100 bg-white text-gray-700 mb-8"
                required
                type={isPasswordVisible ? 'text' : 'password'}
                id="login-password"
                value={loginPassword}
                onChange={handleLoginPasswordChange}
                data-testid="password"
              />

              <button
                className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
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

            {/* alert */}
            {error && (
              <div
                class="bg-red-100 mb-8  border border-red-400 text-red-700 px-4 py-3 rounded relative"
                role="alert"
              >
                <strong className="font-bold">Ups! &nbsp;</strong>
                <span className="block sm:inline">{error}</span>
                <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                  <svg
                    className="fill-current h-6 w-6 text-red-500"
                    role="button"
                    onClick={() => setError(null)}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <title>Close</title>
                    <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                  </svg>
                </span>
              </div>
            )}
              <button className="w-full mb-4 bg-orange-primary hover:bg-orange-secondary transition duration-500 text-white px-4 py-3 rounded-lg text-lg"  data-testid="login">
                Iniciar sesión
              </button>
          </form>

          <button
            className="w-full bg-white hover:bg-gray-100 transition duration-500 text-black outline outline-gray-400 outline-1 px-4 py-3 rounded-lg text-lg mb-4"
            onClick={handleGoogleLogin}
            data-testid="googlelogin"
          >
            <div className="grid grid-cols-12">
              <div className="col-span-2 flex justify-end">
                <img
                  src="/googleLogo.png"
                  className="h-7 w-7 inline text-pink-500"
                  width={20}
                  alt="google"
                />
              </div>
              <div className="col-span-8">
                <span>Iniciar sesión con Google</span>
              </div>
            </div>
          </button>

          <div className="mt-2 mb-2 flex justify-center">
            <Link href="/recover">
              <span className="text-orange-primary hover:underline">
                ¿Olvidaste tu contraseña?
              </span>
            </Link>
          </div>

          <div className="mt-2 mb-2 flex justify-center">
            <span href="/recover">¿No tienes cuenta?&nbsp;</span>
            <Link href="/register">
              <span className="text-orange-primary hover:underline">
                Registrate
              </span>
            </Link>
          </div>
        </div>
        <div className="invisible lg:visible lg:col-span-6 flex justify-end">
          <img className="h-screen" src="/loginImg.png" alt="login" />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
