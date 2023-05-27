import { AuthProvider } from '../context/AuthContext';
import LoginForm from "../pages/login";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import mockRouter from 'next-router-mock';

jest.mock('next/router', () => require('next-router-mock'));

describe("next-router-mock", () => {
    it("Renderizacion del login", () => {
      render(<AuthProvider><LoginForm /></AuthProvider>);
      // check if all components are rendered
      expect(screen.getByTestId("email")).toBeInTheDocument();
      expect(screen.getByTestId("password")).toBeInTheDocument();
      expect(screen.getByTestId("login")).toBeInTheDocument();
      expect(screen.getByTestId("googlelogin")).toBeInTheDocument();
    });
  });

describe("next-router-mock", () => {
    it("Envío del formulario", async () => {
        render(<AuthProvider><LoginForm /></AuthProvider>);
        // check if all components are rendered
        expect(screen.getByTestId("email")).toBeInTheDocument();
        expect(screen.getByTestId("password")).toBeInTheDocument();
        expect(screen.getByTestId("login")).toBeInTheDocument();
        expect(screen.getByTestId("googlelogin")).toBeInTheDocument();

        fireEvent.change(screen.getByTestId("email"), {
            target: { value: "xd@xd.com" },
        });

        fireEvent.change(screen.getByTestId("password"), {
            target: { value: "123456" },
        });

        await fireEvent.click(screen.getByTestId("login"));

        expect(mockRouter.asPath).toEqual("");
    });
});

describe("next-router-mock", () => {
    it("Envío del formulario", async () => {
        render(<AuthProvider><LoginForm /></AuthProvider>);
        // check if all components are rendered
        expect(screen.getByTestId("email")).toBeInTheDocument();
        expect(screen.getByTestId("password")).toBeInTheDocument();
        expect(screen.getByTestId("login")).toBeInTheDocument();
        expect(screen.getByTestId("googlelogin")).toBeInTheDocument();

        fireEvent.change(screen.getByTestId("email"), {
            target: { value: "" },
        });

        fireEvent.change(screen.getByTestId("password"), {
            target: { value: "" },
        });

        await fireEvent.click(screen.getByTestId("login"));

        expect(mockRouter).toMatchObject({ 
            asPath: "",
            pathname: "",
            query: { },
          });
    });
});