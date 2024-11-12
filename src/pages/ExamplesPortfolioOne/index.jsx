import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import TelevisionHeaderSection from "./TelevisionHeaderSection";
import React, { useState } from "react";
import { Button, Text, Input, Heading } from "../../components";

export default function ExamplesPortfolioOnePage() {
    const [newGame, setNewGame] = useState({
        name: "",
        description: "",
        link: "",
        image: "" // Adicionando o campo de imagem
    });

    const handleChange = (e) => {
        if (e && e.target) {
            const { name, value } = e.target;
            setNewGame((prevGame) => ({
                ...prevGame,
                [name]: value
            }));
        }
    };

    const handleAddGame = () => {
        const storedGames = JSON.parse(localStorage.getItem("games")) || [];
        const updatedGames = [...storedGames, newGame];
        localStorage.setItem("games", JSON.stringify(updatedGames));
        setNewGame({ name: "", description: "", link: "", image: "" }); // Resetando todos os campos
        alert("Jogo adicionado com sucesso!"); // Você pode considerar uma notificação aqui
    };

    return (
        <>
            <Helmet>
                <title>KINKLER - Envie seu jogo</title>
                <meta name="description" content="Coloque seu jogo no Kinkler!" />
            </Helmet>
            <div className="flex w-full flex-col gap-[146px] bg-[#f4f4f4] bg-opacity-80">
                <TelevisionHeaderSection />
                <div className="flex justify-center items-center min-h-screen bg-[#f4f4f4] bg-opacity-80">
                    <div className="w-full max-w-3xl p-6 bg-[#f4f4f4] rounded-lg shadow-xl">
                        <div className="container-xs flex flex-col gap-6">
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-col items-start">
                                    <Heading as="h1" className="text-3xl font-semibold text-[#17141b] mb-6 text-center">
                                        Informações do Jogo
                                    </Heading>
                                    <Text as="p" className="text-lg font-normal text-[#17141b] mb-6 text-center">
                                        Preencha os dados abaixo para adicionar seu jogo à plataforma.
                                    </Text>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Text as="p" className="text-lg font-semibold text-[#17141b]">
                                        Nome do Jogo
                                    </Text>
                                    <Input
                                        name="name"
                                        value={newGame.name}
                                        onChange={handleChange}
                                        placeholder="Digite o nome do jogo"
                                        className="w-full p-3 rounded-lg border-none bg-white text-[#17141b] focus:ring-2 focus:ring-purple-600"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <Text as="p" className="text-lg font-semibold text-[#17141b]">
                                        Descrição
                                    </Text>
                                    <Input
                                        name="description"
                                        value={newGame.description}
                                        onChange={handleChange}
                                        placeholder="Digite a descrição do jogo"
                                        className="w-full p-3 rounded-lg border-none bg-white text-[#17141b] focus:ring-2 focus:ring-purple-600 border-none"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <Text as="p" className="text-lg font-semibold text-[#17141b]">
                                        Link do Jogo
                                    </Text>
                                    <Input
                                        name="link"
                                        value={newGame.link}
                                        onChange={handleChange}
                                        placeholder="Digite o link do jogo"
                                        className="w-full p-3 rounded-lg border-none bg-white text-[#17141b] focus:ring-2 focus:ring-purple-600"
                                    />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <Text as="p" className="text-lg font-semibold text-[#17141b]">
                                        Imagem do Jogo (URL)
                                    </Text>
                                    <Input
                                        name="image"
                                        value={newGame.image}
                                        onChange={handleChange}
                                        placeholder="Digite a URL da imagem"
                                        className="w-full p-3 rounded-lg border-none bg-white text-[#17141b] focus:ring-2 focus:ring-purple-600"
                                    />
                                </div>
                            </div>
                            <Button 
                                onClick={handleAddGame} 
                                shape="round" 
                                className="self-stretch rounded-lg bg-purple-600 text-white hover:bg-purple-700 px-[33px] sm:px-5 mt-6"
                            >
                                Adicionar
                            </Button>
                        </div>
                    </div>
                </div>
                <Footer className="border-t border-gray-900 bg-gray-900_04" />
            </div>
        </>
    );
}
