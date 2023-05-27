import { AuthProvider } from '../context/AuthContext';
import Home from "../pages/architecture";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import mockRouter from 'next-router-mock';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

jest.mock('next/router', () => require('next-router-mock'));
// jest.mock("next/link", () => {
//     return ({children}) => {
//         return children;
//     }
// });

describe("next-router-mock", () => {
    it("Renderizacion de la pagina", () => {
        render(<AuthProvider><Home /></AuthProvider>);
        // check if all components are rendered
        expect(screen.getByTestId("title")).toBeInTheDocument();
        expect(screen.getByTestId("cards")).toBeInTheDocument();
    });
});

describe("next-router-mock", () => {
    it("Rendireccion de la pagina", () => {
        render(<AuthProvider><Home /></AuthProvider>, { wrapper: MemoryRouterProvider });
        // check if all components are rendered
        expect(screen.getByTestId("title")).toBeInTheDocument();
        expect(screen.getByTestId("cards")).toBeInTheDocument();

        expect(screen.getByTestId("Coliseo")).toBeInTheDocument();
        expect(screen.getByTestId("Panteón")).toBeInTheDocument();

        fireEvent.click(screen.getByTestId("Coliseo"));
        expect(mockRouter.asPath).toEqual("/architecture/colosseum");

        fireEvent.click(screen.getByTestId("Panteón"));
        expect(mockRouter.asPath).toEqual("/architecture/pantheon");
    });
});