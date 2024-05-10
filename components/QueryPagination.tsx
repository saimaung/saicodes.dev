"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "./ui/pagination";

interface QueryPaginationProps {
  totalPages: number;
  className?: string;
}

const QueryPagination = ({ totalPages, className}: QueryPaginationProps) => {
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;
  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathName}?${params.toString()}`;
  }
  return (
    <Pagination className={className}>
      <PaginationContent>
        { prevPage >= 1 ? (
          <PaginationItem>
            <PaginationPrevious href={createPageURL(prevPage)} />
          </PaginationItem>
        ) : null}
        {
          Array(totalPages).fill(0).map((_, index) => (
            <PaginationItem key={`page-button-${index}`} className="hidden sm:inline-block">
             <PaginationLink 
              isActive={currentPage === index + 1}
              href={createPageURL(index + 1)}>{index + 1}</PaginationLink>
            </PaginationItem>
          ))
        }
        { nextPage <= totalPages ? (
          <PaginationItem>
            <PaginationNext href={createPageURL(nextPage)} />
          </PaginationItem>
        ) : null}
      </PaginationContent>
    </Pagination>
  )
}

export default QueryPagination
