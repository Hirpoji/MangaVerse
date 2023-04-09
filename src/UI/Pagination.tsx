import { FC, useState } from "react";

interface PaginationProps {
  itemsPerPage: number;
  totalItems: number;
  paginate: Function;
  classes: string;
}

const Pagination: FC<PaginationProps> = ({
  itemsPerPage,
  totalItems,
  paginate,
  classes,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumbers = [];
  console.log(totalItems);

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (number: number) => {
    setCurrentPage(number);
    paginate(number);
  };

  return (
      <ul className={classes}>
        {pageNumbers.map((number) => (
          <li key={number}>
            <div
              onClick={() => handleClick(number)}
              className="cursor-pointer"
            >
              {number}
            </div>
          </li>
        ))}
      </ul>
  );
};

export default Pagination;
