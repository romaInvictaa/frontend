import { AuthProvider } from '../context/AuthContext';
import History from "../pages/history";
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
        render(<AuthProvider><History /></AuthProvider>);
        // check if all components are rendered
        expect(screen.getByTestId("title")).toBeInTheDocument();
        expect(screen.getByTestId("cards")).toBeInTheDocument();
    });
});

describe("next-router-mock", () => {
    it("Rendireccion de la pagina", () => {
        render(<AuthProvider><History /></AuthProvider>, { wrapper: MemoryRouterProvider });
        // check if all components are rendered
        expect(screen.getByTestId("title")).toBeInTheDocument();
        expect(screen.getByTestId("cards")).toBeInTheDocument();

        expect(screen.getByTestId("Romulo y Remo")).toBeInTheDocument();
        expect(screen.getByTestId("Ruinas de pompeya")).toBeInTheDocument();

        fireEvent.click(screen.getByTestId("Romulo y Remo"));
        expect(mockRouter.asPath).toEqual("/history/romulo");

        fireEvent.click(screen.getByTestId("Ruinas de pompeya"));
        expect(mockRouter.asPath).toEqual("/history/ruinaspompeya");
    });
});