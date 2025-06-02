export type Paginated<T> = {
  current_page: number;
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  next_page_url: string | null;
  to: number;
  total: number;
  links: PaginationLinks[];
  data: T[];
};

export type PaginationLinks = {
  active: boolean;
  label: string;
  url: string | null;
};

export type Category = {
  id: number;
  name: string;
  slug: string;
  image: string | null;
  description: string;
  is_featured: boolean;
  products_count?: number | null;
};
