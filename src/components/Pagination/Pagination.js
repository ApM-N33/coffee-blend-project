import React from "react"

function Pagination({
  totalPages,
  handleChangePage,
  handlePrevPage,
  handleNextPage,
  currentPage,
}) {
  return (
    <div className="row">
      <div className="col-12">
        <ul className="paginate_ list-unstyled d-flex flex-wrap justify-content-center align-items-center column-gap-1">
          <li className="prev-item">
            <button onClick={() => handlePrevPage()} className="prev-btn">
              {"<"}
            </button>
          </li>
          {[...Array(totalPages)].map((_, BtnIndex) => (
            <li key={BtnIndex} className="page--item">
              <button
                onClick={() => handleChangePage(BtnIndex)}
                className={`page-btn ${
                  currentPage === BtnIndex ? "active" : ""
                }`}
              >
                {BtnIndex + 1}
              </button>
            </li>
          ))}
          <li className="next-item">
            <button onClick={() => handleNextPage()} className="next-btn">
              {">"}
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Pagination
