import React from "react";
import Pagination, { usePagination } from "@material-ui/lab/Pagination";
import PaginationItem from "@material-ui/lab/PaginationItem";
import { Link } from "gatsby";

const PaginationLinks = ({ currentPage, numberOfPages }) => {
  // const isFirst = currentPage === 1;
  // const isLast = currentPage === numberOfPages;
  // const previousPage =
  //   currentPage - 1 === 1 ? "/blog" : "/blog/" + (currentPage - 1).toString();
  // const nextPage = "/blog/" + (currentPage + 1).toString();
  console.log(currentPage, numberOfPages) // not sure why it is undefined. 

  const { items } = usePagination({
    count: numberOfPages,
  })
  console.log(items) // not sure why next to be clicked twice in order for it to be disabled
  return (
    <Pagination>
        {items.map(item => (
          <li key={item.type || item.page.toString()}>
            <PaginationItem
              component={Link}
              to={`/blog${item.page === 1 ? '' : `/${item.page}`}`}
              {...item}
            />
          </li>
        ))}
      </Pagination>
      
    // <Pagination>
    //   {isFirst ? (
    //     <PaginationItem disabled component={Link} to='/blog' />
    //   ) : (
    //     <PaginationItem component={Link} to={previousPage} />
    //   )}
    //   {Array.from({ length: numberOfPages }, (_, i) =>
    //     currentPage === i + 1 ? (
    //       <PaginationItem
    //         key={`page-number${i + 1}`}
    //         component={Link}
    //         to={`/${i === 0 ? "blog" : "blog/" + (i + 1)}`}
    //       >
    //         {i + 1}
    //       </PaginationItem>
    //     ) : (
    //       <PaginationItem
    //         key={`page-number${i + 1}`}
    //         component={Link}
    //         to={`/${i === 0 ? "blog" : "blog/" + (i + 1)}`}
    //       >
    //         {i + 1}
    //       </PaginationItem>
    //     )
    //   )}
    //   {isLast ? (
    //     <PaginationItem disabled component={Link} to={nextPage} />
    //   ) : (
    //     <PaginationItem component={Link} to={nextPage} />
    //   )}
    // </Pagination>
  );
};

export default PaginationLinks;
