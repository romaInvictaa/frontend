import { AuthProvider } from '../context/AuthContext';
import RegisterForm from "../pages/register";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import mockRouter from 'next-router-mock';

jest.mock('next/router', () => require('next-router-mock'));

describe("next-router-mock", () => {
    it("Renderizacion del registro", () => {
      render(<AuthProvider><RegisterForm /></AuthProvider>);
      // check if all components are rendered
      expect(screen.getByTestId("user_name")).toBeInTheDocument();
      expect(screen.getByTestId("user_phone")).toBeInTheDocument();
      expect(screen.getByTestId("user_email")).toBeInTheDocument();
      expect(screen.getByTestId("user_password")).toBeInTheDocument();
      expect(screen.getByTestId("register-submit")).toBeInTheDocument();
    });
  });

describe("next-router-mock", () => {
    it("Envío del formulario de registro", async () => {
        render(<AuthProvider><RegisterForm /></AuthProvider>);
        // check if all components are rendered
        expect(screen.getByTestId("user_name")).toBeInTheDocument();
        expect(screen.getByTestId("user_phone")).toBeInTheDocument();
        expect(screen.getByTestId("user_email")).toBeInTheDocument();
        expect(screen.getByTestId("user_password")).toBeInTheDocument();
        expect(screen.getByTestId("register-submit")).toBeInTheDocument();

        fireEvent.change(screen.getByTestId("user_name"), {
            target: { value: "nombre" },
        });

        fireEvent.change(screen.getByTestId("user_phone"), {
            target: { value: "1234567890" },
        });

        fireEvent.change(screen.getByTestId("user_email"), {
            target: { value: "mail@mail.com" },
        });

        fireEvent.change(screen.getByTestId("user_password"), {
            target: { value: "123456" },
        });

        await fireEvent.click(screen.getByTestId("register-submit"));
        expect(mockRouter.asPath).toEqual("");
    });
});
