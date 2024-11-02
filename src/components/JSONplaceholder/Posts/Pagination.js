import React from 'react';

const Pagination = ({ pages, currentPage, setCurrentPage }) => {
    return (
        <div className="pagination">
            <button className="pagination__btn" onClick={() => setCurrentPage(1)}>
                «
            </button>
            <button className="pagination__btn" onClick={() => currentPage !== 1 && setCurrentPage((prev) => prev - 1)}>
                ‹
            </button>
            {pages.map((page) => (
                <button className={currentPage === page ? 'pagination__btn-active' : 'pagination__btn'} key={page} onClick={() => setCurrentPage(page)}>
                    {page}
                </button>
            ))}
            <button className="pagination__btn" onClick={() => currentPage !== pages.length && setCurrentPage((prev) => prev + 1)}>
                ›
            </button>
            <button className="pagination__btn" onClick={() => setCurrentPage(pages.length)}>
                »
            </button>
        </div>
    );
};

export default Pagination;
