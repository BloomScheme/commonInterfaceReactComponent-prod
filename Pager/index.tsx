import * as React from "react";
import Paginate from "./Pagenate";

type Props = {
  items: any[];
  itemsPerPage?: number;
  onPageChange?: (items: any[]) => void;
};

const Pager: React.FC<Props> = ({ items, itemsPerPage = 20, onPageChange }) => {
  const [currentPage, setCurrentPage] = React.useState(0);

  const offset = currentPage * itemsPerPage;
  const pageCount = Math.ceil(items.length / itemsPerPage);
  const paginatedItems = items.slice(offset, offset + itemsPerPage);

  const handlePageChange = (data: { selected: number }) => {
    setCurrentPage(data.selected);
  };

  React.useEffect(() => {
    onPageChange && onPageChange(paginatedItems);
  }, [currentPage, items.length, itemsPerPage]);

  return (
    <Paginate
      previousLabel={"<"}
      nextLabel={">"}
      breakLabel={"..."}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={handlePageChange}
      containerClassName={"pagination"}
      activeClassName={"active"}
    />
  );
};

export default Pager;
