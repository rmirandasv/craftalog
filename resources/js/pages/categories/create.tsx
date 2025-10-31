import CategoryForm from '@/components/categories/category-form';
import Heading from '@/components/heading';
import AppLayout from '@/layouts/app-layout';
import { create, index, store } from '@/routes/categories';
import { BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Categories',
    href: index().url,
  },
  {
    title: 'Create Category',
    href: create().url,
  },
];

export default function CreateCategory() {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <div className="px-4 py-6">
        <Heading title="Create Category" />
        <div className="mt-6">
          <CategoryForm
            formProps={store.form()}
            submitLabel="Create Category"
          />
        </div>
      </div>
    </AppLayout>
  );
}
