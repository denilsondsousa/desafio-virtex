import styles from './styles.module.css';
type PaginationProps = {
  pages: number;
  currentPage?: number;
  setCurrentPage: (num: number) => void;
};
export default function Pagination({
  pages,
  setCurrentPage,
  currentPage,
}: PaginationProps) {
  return (
    <div className={styles.pagination}>
      {Array.from(Array(pages), (data, index) => {
        return (
          <button
            value={index}
            key={index}
            onClick={(e) => setCurrentPage(Number(e.currentTarget.value))}
          >
            {index + 1}
          </button>
        );
      })}
    </div>
  );
}
