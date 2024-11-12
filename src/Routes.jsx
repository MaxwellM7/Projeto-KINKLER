import React from "react";
import { useRoutes } from "react-router-dom";
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ExamplesPortfolio from './pages/ExamplesPortfolio';
import ExamplesPortfolioOne from './pages/ExamplesPortfolioOne';
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Registro/RegisterPage";

const ProjectRoutes = () => {
    let element = useRoutes([
        { path: "/", element: <Home /> },
        { path: "*", element: <NotFound /> },
        {
            path: "/examplesportfolio",
            element: <ExamplesPortfolio />,
        },
        {
            path: "/examplesportfolioone",
            element: <ExamplesPortfolioOne />,
        },
        {
            path: "/login",
            element: <LoginPage />,
        },
        {
            path: "/registro",
            element: <RegisterPage />,
        },
    ]);

    return element;
};

export default ProjectRoutes;
