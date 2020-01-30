import React from "react";
import api from "../api";
import './index.css'
export default function Login({ history }) {
  if (sessionStorage.getItem("id")) history.push("/dashboard");
  const [cpf, setCpf] = React.useState("");
  async function handleSubmit(event) {
    event.preventDefault();
    await api
      .get("/login", {
        headers: {
          id: cpf
        }
      })
      .then(function(response) {
        sessionStorage.setItem("name", response.data[0].nome);
        sessionStorage.setItem("id", response.data[0].cpf);
        history.push("/dashboard");
      })
      .catch(function(err) {
        alert("Usuário não encontrado");
      });
  }
  return (
    <div className="container">
      <div className="content">
        <p>Faça login com o seu CPF.</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="cpf">CPF *</label>
          <input
            type="text"
            id="text"
            placeholder="Digite o seu CPF no formato 000.000.000.-00"
            onChange={event => setCpf(event.target.value)}
          ></input>

          <button className="bt" type="submit">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
