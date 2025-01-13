import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-2">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded-lg bg-white/80 backdrop-blur-sm border border-emerald-200 text-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-emerald-50 transition-colors"
      >
        <ChevronLeft size={20} />
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-10 h-10 rounded-lg border ${
            currentPage === page
              ? 'bg-emerald-500 text-white border-emerald-500'
              : 'bg-white/80 backdrop-blur-sm border-emerald-200 text-emerald-600 hover:bg-emerald-50'
          } transition-colors`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-lg bg-white/80 backdrop-blur-sm border border-emerald-200 text-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-emerald-50 transition-colors"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default Pagination;