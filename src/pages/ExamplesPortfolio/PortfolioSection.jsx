import { Heading } from "../../components";
import UserProfile from "../../components/UserProfile";
import React, { Suspense, useEffect, useState } from "react";
import { FaEdit, FaTrash, FaSave } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function PortfolioSection() {
  const [games, setGames] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedGame, setEditedGame] = useState({ name: "", description: "", link: "" });

  useEffect(() => {
    const storedGames = JSON.parse(localStorage.getItem("games")) || [];
    setGames(storedGames);
  }, []);

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditedGame(games[index]);
  };

  const handleSave = (index) => {
    const updatedGames = [...games];
    updatedGames[index] = editedGame;
    setGames(updatedGames);
    localStorage.setItem("games", JSON.stringify(updatedGames));
    setEditingIndex(null);
  };

  const handleDelete = (index) => {
    const confirmDelete = window.confirm("Deseja realmente excluir este jogo?");
    if (confirmDelete) {
      const updatedGames = games.filter((_, i) => i !== index);
      setGames(updatedGames);
      localStorage.setItem("games", JSON.stringify(updatedGames));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedGame((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-900 px-8 py-10">
        <Link to="/" className="mb-6">
          <img src="/assets/images/img_television.svg" alt="KINKLER Logo" className="h-10 md:h-12" />
        </Link>
        <Heading as="h2" className="text-[24px] font-semibold tracking-[-0.48px] text-[#17141b] md:text-[22px] mb-6">
          Jogos Adicionados
        </Heading>
        <div className="grid grid-cols-3 gap-8 md:grid-cols-2 sm:grid-cols-1 w-full">
          <Suspense fallback={<div>Loading feed...</div>}>
            {games.map((game, index) => (
              <div
                key={index}
                className="relative group p-6 rounded-lg bg-[#f4f4f4] text-gray-900 shadow-lg"
              >
                {editingIndex === index ? (
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={editedGame.name}
                      onChange={handleChange}
                      className="w-full p-3 mb-4 rounded bg-white text-gray-900 border border-[#dcdcdc] focus:ring-[#6b21a8] focus:border-[#6b21a8]"
                      placeholder="Nome do Jogo"
                    />
                    <input
                      type="text"
                      name="description"
                      value={editedGame.description}
                      onChange={handleChange}
                      className="w-full p-3 mb-4 rounded bg-white text-gray-900 border border-[#dcdcdc] focus:ring-[#6b21a8] focus:border-[#6b21a8]"
                      placeholder="Descrição do Jogo"
                    />
                    <input
                      type="text"
                      name="link"
                      value={editedGame.link}
                      onChange={handleChange}
                      className="w-full p-3 mb-4 rounded bg-white text-gray-900 border border-[#dcdcdc] focus:ring-[#6b21a8] focus:border-[#6b21a8]"
                      placeholder="Link do Jogo"
                    />
                    <button
                      onClick={() => handleSave(index)}
                      className="text-white bg-[#6b21a8] p-3 rounded-lg mt-4 hover:bg-[#5a1e91] focus:outline-none"
                      title="Salvar"
                    >
                      <FaSave />
                    </button>
                  </div>
                ) : (
                  <div>
                    <UserProfile
                      userTitle={game.name}
                      userDescription={<p className="text-gray-700">{game.description}</p>}
                      userLink={
                        <a
                          href={game.link}
                          className="text-white bg-[#6b21a8] p-3 rounded-md border border-[#6b21a8] hover:bg-[#5a1e91] focus:outline-none transition"
                        >
                          Acessar Jogo
                        </a>
                      }
                      userImage={game.image}
                    />
                  </div>
                )}
                <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => handleEdit(index)}
                    className="text-white bg-[#6b21a8] p-1 rounded-lg"
                    title="Editar"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="text-white bg-red-500 p-1 rounded-lg"
                    title="Excluir"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </Suspense>
        </div>
      </div>
    </>
  );
}
