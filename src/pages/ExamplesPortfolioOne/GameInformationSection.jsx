import { Button, Text, Img, Input, TextArea, Heading } from "../../components";
import React from "react";

export default function GameInformationSection() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-[#f4f4f4] bg-opacity-80">
            <div className="w-full max-w-3xl p-6 bg-[#f4f4f4] rounded-lg shadow-xl">
                <Heading as="h1" className="text-3xl font-semibold text-[#17141b] mb-6 text-center">
                    Informações do Jogo
                </Heading>
                <Text as="p" className="text-lg font-normal text-[#17141b] mb-6 text-center">
                    Preencha os dados abaixo para adicionar seu jogo à plataforma.
                </Text>

                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <Text as="p" className="text-lg font-semibold text-[#17141b]">
                            Nome do Jogo
                        </Text>
                        <Input
                            name="Game Name Field"
                            placeholder="Digite o nome do jogo"
                            className="w-full p-3 rounded-lg border-none bg-white text-[#17141b] focus:ring-2 focus:ring-purple-600"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <Text as="p" className="text-lg font-semibold text-[#17141b]">
                            Descrição
                        </Text>
                        <TextArea
                            shape="round"
                            name="Description Field"
                            placeholder="Digite a descrição do jogo"
                            className="w-full p-3 rounded-lg border-none bg-white text-[#17141b] focus:ring-2 focus:ring-purple-600"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <Text as="p" className="text-lg font-semibold text-[#17141b]">
                            Link do Jogo
                        </Text>
                        <Input
                            name="Link Field"
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
                            placeholder="Digite a URL da imagem"
                            className="w-full p-3 rounded-lg border-none bg-white text-[#17141b] focus:ring-2 focus:ring-purple-600"
                        />
                    </div>

                    <Button
                        shape="round"
                        className="w-full mt-6 p-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
                    >
                        Adicionar Jogo
                    </Button>
                </div>
            </div>
        </div>
    );
}
