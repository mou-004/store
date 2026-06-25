const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <nav className="pagination" aria-label="Pagination">
      <button
        type="button"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        ← Previous
      </button>

      <div className="page-numbers">
        {Array.from({ length: totalPages }).map((_, index) => {
          const page = index + 1;

          return (
            <button
              type="button"
              key={page}
              className={page === currentPage ? 'active-page' : ''}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          );
        })}
      </div>

      <button
        type="button"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next →
      </button>
    </nav>
  );
};

export default Pagination;
