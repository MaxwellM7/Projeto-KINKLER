import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; // Link para redirecionar para a página inicial

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Lógica de autenticação
    console.log('Login com:', email, password);
    navigate('/');
  };

  return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-900">
        <Link to="/" className="mb-6">
          <img src="/assets/images/img_television.svg" alt="KINKLER Logo" className="h-10 md:h-12" />
        </Link>
        <h1 className="text-3xl font-semibold mb-6 text-[#17141b]">Login</h1>
        <form onSubmit={handleLogin} className="w-full max-w-md p-6 bg-[#f4f4f4] rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block mb-2 text-[#17141b]">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded bg-white text-gray-900 border border-[#dcdcdc] focus:ring-[#6b21a8] focus:border-[#6b21a8]"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-[#17141b]">Senha</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 rounded bg-white text-gray-900 border border-[#dcdcdc] focus:ring-[#6b21a8] focus:border-[#6b21a8]"
              required
            />
          </div>
          <button type="submit" className="w-full p-3 bg-[#6b21a8] text-white rounded mt-4 hover:bg-[#5a1e91] focus:outline-none">
            Entrar
          </button>
        </form>
        <p className="mt-4 text-[#17141b]">
          Não tem uma conta? <a href="/registro" className="text-[#6b21a8] hover:text-[#5a1e91]">Cadastre-se</a>
        </p>
      </div>
    );
  }
