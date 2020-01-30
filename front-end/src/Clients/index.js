import React, { useEffect } from "react";
import api from "../api";
import Clients from "../Components/post";
import Clients2 from "../Components/post2";
import Pagination from "../Components/pagination";
import "../App.css";
export default function Main({ history }) {
  const [clients, setClients] = React.useState([]);
  const [clients2, setClients2] = React.useState([]);
  const [maxClientShop, setShop] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  const [total2, setTotal2] = React.useState(0);
  //Página atual
  const [currentPage, setCurrentPage] = React.useState(1);
  const [currentPage2, setCurrentPage2] = React.useState(1);
  //Define os clientes por página
  const [clientPerPage] = React.useState(5);
  //Faz a chamada a API usando a ferramenta axios (Dados dos clientes)
  useEffect(() => {
    async function get() {
      await api
        .get("/maxshop/", {})
        .then(function(response) {
          console.log(response.data)
          setShop(response.data);
        })
        .catch(function(err) {});
    }
    get();
  }, []);
  useEffect(() => {
    async function get() {
      await api
        .get(`/main/${currentPage - 1}`, {})
        .then(function(response) {
          setTotal(parseInt(response.data.total));
          console.log(response.data.clientes)
          setClients(response.data.clientes);
        })
        .catch(function(err) {});
    }
    get();
  }, [currentPage]);
  useEffect(() => {
    async function get() {
      await api
        .get(`/2018/${currentPage2 - 1}`, {})
        .then(function(response) {
          setClients2(response.data.clientes);
          console.log(response.data.clientes)
          setTotal2(parseInt(response.data.total));
        })
        .catch(function(err) {});
    }
    get();
  }, [currentPage2]);
  const paginate = number => setCurrentPage(number);
  const paginate2 = number => setCurrentPage2(number);
  return (
    //React Fragment: Para conter elementos não aninhados por um elemento pai
    <React.Fragment>
      <p>Lista de Clientes</p>
      {/*Componente para exibir a tabela de clientes*/}
      <Clients data={clients} />
      {/*Componente para exibir a paginação e definir as páginas*/}
      <Pagination
        active={currentPage}
        paginate={paginate}
        clientsPerPage={clientPerPage}
        totalClients={total}
      />
      <p>Cliente com maior compra única em 2019 </p>
      <Clients2 data={maxClientShop} />
      <p>Clientes que mais realizaram compras em 2018 </p>
      <Clients data={clients2} />
      <Pagination
        active={currentPage2}
        paginate={paginate2}
        clientsPerPage={clientPerPage}
        totalClients={total2}
      />
    </React.Fragment>
  );
}
