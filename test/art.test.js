import { AuthProvider } from '../context/AuthContext';
import Art from "../pages/art";
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
        render(<AuthProvider><Art /></AuthProvider>);
        // check if all components are rendered
        expect(screen.getByTestId("title")).toBeInTheDocument();
        expect(screen.getByTestId("cards")).toBeInTheDocument();
    });
});

describe("next-router-mock", () => {
    it("Rendireccion de la pagina", () => {
        render(<AuthProvider><Art /></AuthProvider>, { wrapper: MemoryRouterProvider });
        // check if all components are rendered
        expect(screen.getByTestId("title")).toBeInTheDocument();
        expect(screen.getByTestId("cards")).toBeInTheDocument();

        expect(screen.getByTestId("Mosaico de issos")).toBeInTheDocument();
        expect(screen.getByTestId("Augusto prima porta")).toBeInTheDocument();

        fireEvent.click(screen.getByTestId("Mosaico de issos"));
        expect(mockRouter.asPath).toEqual("/art/mosaico");

        fireEvent.click(screen.getByTestId("Augusto prima porta"));
        expect(mockRouter.asPath).toEqual("/art/primaporta");
    });
});