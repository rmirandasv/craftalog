import { CatalogDocument } from '@/components/pdf/catalog-document';
import { CatalogColors, Product } from '@/types';
import { PDFViewer } from '@react-pdf/renderer';
import { useEffect, useState } from 'react';

interface CatalogPreviewProps {
  companyName: string;
  catalogName: string;
  coverImage: string;
  colors: CatalogColors;
  productsPerPage: number;
  products: Product[];
}

export function CatalogPreview({
  companyName,
  catalogName,
  coverImage,
  colors,
  productsPerPage,
  products,
}: CatalogPreviewProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="flex h-full items-center justify-center rounded-lg border bg-muted/50">
        <p className="text-sm text-muted-foreground">Loading preview...</p>
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="flex h-full items-center justify-center rounded-lg border bg-muted/50">
        <div className="text-center">
          <p className="text-sm font-medium">No products selected</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Select products to see a preview
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full w-full overflow-hidden rounded-lg border shadow-sm">
      <PDFViewer
        width="100%"
        height="100%"
        showToolbar={true}
        className="border-0"
      >
        <CatalogDocument
          config={{
            companyName: companyName || 'Company Name',
            catalogName: catalogName || 'Catalog Name',
            coverImage: coverImage || '',
            createdDate: new Date(),
            updatedDate: new Date(),
            colors: colors,
            productsPerPage: productsPerPage,
          }}
          products={products}
        />
      </PDFViewer>
    </div>
  );
}
