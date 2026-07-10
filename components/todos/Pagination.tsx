"use client";

import { Button } from "@/components/ui/button";

interface PaginationProps {
  pageNumber: number;
  hasNextPage: boolean;
  onPageChange: (page: number) => void;
}

export function Pagination({ pageNumber, hasNextPage, onPageChange }: PaginationProps) {
  return (
    <div className="flex items-center justify-center gap-4">
      <Button
        variant="outline"
        disabled={pageNumber <= 1}
        onClick={() => onPageChange(pageNumber - 1)}
      >
        Қафо
      </Button>
      <span className="text-sm text-muted-foreground">Саҳифаи {pageNumber}</span>
      <Button
        variant="outline"
        disabled={!hasNextPage}
        onClick={() => onPageChange(pageNumber + 1)}
      >
        Пеш
      </Button>
    </div>
  );
}
