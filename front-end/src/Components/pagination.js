import React from "react";
const Pagination = ({ clientsPerPage, totalClients, paginate, active }) => {
  console.log(totalClients);
  const Numbers = [];
  for (let i = 1; i <= Math.ceil(totalClients / clientsPerPage); i++) {
    Numbers.push(i);
  }
  return (
    <div className="pagination">
      {Numbers.map(number => (
        <span
          key={number}
          onClick={() => paginate(number)}
          className={active == number ? "active" : ""}
        >
          {number}
        </span>
      ))}
    </div>
  );
};
export default Pagination;