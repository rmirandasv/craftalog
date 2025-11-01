import { InertiaLinkProps } from '@inertiajs/react';
import { LucideIcon } from 'lucide-react';

export interface Auth {
  user: User;
}

export interface BreadcrumbItem {
  title: string;
  href: string;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

export interface NavItem {
  title: string;
  href: NonNullable<InertiaLinkProps['href']>;
  icon?: LucideIcon | null;
  isActive?: boolean;
}

export interface SharedData {
  name: string;
  quote: { message: string; author: string };
  auth: Auth;
  sidebarOpen: boolean;
  [key: string]: unknown;
}

export interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string;
  email_verified_at: string | null;
  two_factor_enabled?: boolean;
  created_at: string;
  updated_at: string;
  [key: string]: unknown; // This allows for additional properties...
}

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

export interface ProductCategory {
  id: number;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string | null;
  image_url: string;
  created_at: string;
  updated_at: string;
  category: ProductCategory;
}

export interface CatalogProduct {
  id: number;
  catalog_id: number;
  product_id: number;
  created_at: string;
  updated_at: string;
}

export interface Catalog {
  id: number;
  name: string;
  company_name: string;
  cover_image: string;
  description: string;
  created_at: string;
  updated_at: string;
  products: Product[];
}
