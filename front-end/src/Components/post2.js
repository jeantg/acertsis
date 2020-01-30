import React from "react";
export default function({ data, valorTotal }) {
  return (
    <React.Fragment>
      <table>
        <tr>
          <th>Cliente</th>
          <th>Total em compras</th>
          <th>Data</th>
        </tr>
        {data.map((value, index) => (
          <tr>
            <td>{value.cliente.nome}</td>
            <td>R$ {value.valortotal}</td>
            <td>{value.dat}</td>
          </tr>
        ))}
      </table>
    </React.Fragment>
  );
}
