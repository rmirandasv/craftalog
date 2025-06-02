import { Paginated } from "@/types";
import { Link } from "@inertiajs/react";

interface PaginationProps<T> {
  paginated: Paginated<T>;
}

export function Pagination<T>({ paginated }: PaginationProps<T>) {
  return (
    <div className="flex items-center justify-between border-t border-gray-200 px-4 py-3 sm:px-6">
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{paginated.from}</span> to{" "}
            <span className="font-medium">{paginated.to}</span> of{" "}
            <span className="font-medium">{paginated.total}</span> results
          </p>
        </div>
        <div className="flex space-x-2">
          {paginated.prev_page_url && (
            <Link
              href={paginated.prev_page_url}
              className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              preserveScroll
            >
              Previous
            </Link>
          )}
          {paginated.next_page_url && (
            <Link
              href={paginated.next_page_url}
              className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              preserveScroll
            >
              Next
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
