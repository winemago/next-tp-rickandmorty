'use client'

import { FC } from 'react'
import { useSearchParams } from 'next/navigation'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

type PaginationControlsProps = {
  hasNextPage: boolean,
  hasPrevPage: boolean,
  totalPages: number
}

const PaginationControls: FC<PaginationControlsProps> = (
  {
    hasNextPage,
    hasPrevPage,
    totalPages
  }
) => {
  const searchParams = useSearchParams()

  const page = searchParams.get('page') ?? '1'

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className=' cursor-pointer'
            href={`${hasPrevPage ? `/?page=${Number(page) - 1}` : '' }`}
            scroll={false}
            isActive={hasPrevPage}
          />
        </PaginationItem>
        <PaginationItem>
          {page}/{totalPages}
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            className=' cursor-pointer'
            href={`${hasNextPage ? `/?page=${Number(page) + 1}` : '' }`}
            scroll={false}
            isActive={hasNextPage}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}

export default PaginationControls