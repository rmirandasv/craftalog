import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { type PaginationLinks } from '@/types';

interface PaginatorProps {
  links: PaginationLinks[];
}

export default function Paginator({ links }: PaginatorProps) {
  if (!links || links.length === 0) return null;

  return (
    <Pagination className="mt-4">
      <PaginationContent>
        {links.map((link, idx) => {
          const label = link.label;
          const isPrevious = /«|&laquo;|Previous/i.test(label);
          const isNext = /»|&raquo;|Next/i.test(label);
          const isEllipsis = label === '...';

          if (isEllipsis) {
            return (
              <PaginationItem key={`ellipsis-${idx}`}>
                <PaginationEllipsis />
              </PaginationItem>
            );
          }

          if (isPrevious) {
            return (
              <PaginationItem key={`prev-${idx}`}>
                {link.url ? (
                  <PaginationPrevious href={link.url} />
                ) : (
                  <PaginationPrevious
                    aria-disabled
                    className="pointer-events-none opacity-50"
                  />
                )}
              </PaginationItem>
            );
          }

          if (isNext) {
            return (
              <PaginationItem key={`next-${idx}`}>
                {link.url ? (
                  <PaginationNext href={link.url} />
                ) : (
                  <PaginationNext
                    aria-disabled
                    className="pointer-events-none opacity-50"
                  />
                )}
              </PaginationItem>
            );
          }

          return (
            <PaginationItem key={`page-${idx}`}>
              {link.url ? (
                <PaginationLink href={link.url} isActive={link.active}>
                  {label}
                </PaginationLink>
              ) : (
                <PaginationLink
                  isActive={link.active}
                  aria-disabled
                  className="pointer-events-none opacity-50"
                >
                  {label}
                </PaginationLink>
              )}
            </PaginationItem>
          );
        })}
      </PaginationContent>
    </Pagination>
  );
}
