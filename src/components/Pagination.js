const Pagination = ({ page, totalPages, setPage, currentPage }) => {
  const pageNumbers = [];

  const prevPage = () => setPage(page - 1);
  const nextPage = () => setPage(page + 1);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {page > 1 && (
          <li className="page-item">
            <div className="page-link" onClick={prevPage}>
              Précédent
            </div>
          </li>
        )}
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={
              number === currentPage ? "page-item active" : "page-item"
            }
            onClick={() => setPage(number)}
          >
            <div className="page-link">{number}</div>
          </li>
        ))}
        {page < totalPages && (
          <li className="page-item">
            <div className="page-link" onClick={nextPage}>
              Suivant
            </div>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
