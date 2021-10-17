import { usePagination } from "../../../hooks/usePagination";
import styles from "./Pagination.module.css";
export const Pagination = ({ totalPages, setPage, currentPage }) => {
  const pagesArray = usePagination(totalPages);
  return (
    <div>
      {pagesArray.map((p) => (
        <span
          className={p === currentPage ? styles.current : styles.span}
          onClick={() => setPage(p)}
          key={p}
        >
          {p}
        </span>
      ))}
    </div>
  );
};
