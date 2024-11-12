import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HeroSection from "./HeroSection";
import PortfolioSection from "./PortfolioSection";
import React, { useEffect, useState } from "react";

export default function ExamplesPortfolioPage() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        const storedGames = JSON.parse(localStorage.getItem("games")) || [];
        setGames(storedGames);
    }, []);

    return (
        <>
            <Helmet>
                <title>KINKLER - Página inicial</title>
                <meta 
                    name="description"
                    content="Descubra uma variedade de jogos no Kinkler"
                />
            </Helmet>
            <div className="w-full bg-gray-900_11">
                <Header />
                <div className="mt-[100px]">
                    <HeroSection />
                    <PortfolioSection />
                </div>
                <Footer className="border-gray-900_11 bg-gray-900_10" />
            </div>
        </>
    );
}
