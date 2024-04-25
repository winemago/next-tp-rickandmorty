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
  const id1 = searchParams.get('id1')
  const id2 = searchParams.get('id2')

  return (
    <Pagination>
    <PaginationContent>
      <PaginationItem>
        <PaginationPrevious 
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
        onClick={() => {
          hasNextPage &&
          router.push(`/?page=${Number(page) + 1}&id1=${id1}&id2=${id2}`)
        }} />
      </PaginationItem>
    </PaginationContent>
  </Pagination>
  )
}

export default PaginationControls