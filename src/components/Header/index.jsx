import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

import { Link, NavLink } from "react-router";

import "./header.css";

export default function Header() {
const { user, logout} = useContext(AuthContext);

  return (
    <header className="header">
      <Link to="/" className="logo">
        💪 Fôlego
      </Link>

      <nav className="nav">
        <NavLink to="/">Início</NavLink>
        <NavLink to="/modalidades">Modalidades</NavLink>
        <NavLink to="/sobre">Sobre</NavLink>
        <NavLink to="/planos">Planos</NavLink>
        <NavLink to="/avaliacoes">Avaliações</NavLink>
       
        {
          user == null ? (
             <NavLink to="/contato">Contato</NavLink>
          ) : (
            <button onClick={logout}>Sair</button>
          )
        }
         <NavLink to="/login">Login</NavLink>
         <NavLink to="/area-do-aluno">Área do Aluno</NavLink>
      </nav>
    </header>
  );
}
