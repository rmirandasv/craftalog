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

export type Brand = {
  id: number;
  name: string;
  slug: string;
  logo: string | null;
  description: string | null;
  is_featured: boolean;
  products_count?: number | null;
};

export type Product = {
  id: number;
  name: string;
  slug: string;
  description: string;
  short_description: string;
  is_featured: boolean;
  images: string[] | null;
  attributes: Record<string, string>[];
  brand?: Brand;
  categories?: Category[];
}

export type SharedData = {
  categories: Category[];
}
