'use client'

import { FC } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

interface PaginationControlsProps {
  hasNextPage: boolean
  hasPrevPage: boolean
}

const PaginationControls: FC<PaginationControlsProps> = (
  {
    hasNextPage,
    hasPrevPage,
  }
) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const page = searchParams.get('page') ?? '1'

  return (
    <Pagination>
    <PaginationContent>
      <PaginationItem>
        <PaginationPrevious 
        className=' cursor-pointer'
        onClick={() => {
          hasPrevPage &&
          router.push(`/?page=${Number(page) - 1}`)
        }} />
      </PaginationItem>
      <PaginationItem>
        {page}
      </PaginationItem>
      <PaginationItem>
        <PaginationNext 
        className=' cursor-pointer'
        onClick={() => {
          hasNextPage &&
          router.push(`/?page=${Number(page) + 1}`)
        }} />
      </PaginationItem>
    </PaginationContent>
  </Pagination>
  )
}

export default PaginationControls