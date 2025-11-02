import { CatalogDocument } from '@/components/pdf/catalog-document';
import { Button } from '@/components/ui/button';
import { Catalog } from '@/types';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { Download } from 'lucide-react';

type DownloadPdfButtonProps = {
  catalog: Catalog;
};

export default function DownloadPdfButton({ catalog }: DownloadPdfButtonProps) {
  return (
    <PDFDownloadLink
      document={
        <CatalogDocument
          config={{
            companyName: catalog.company_name || 'Company',
            catalogName: catalog.name,
            coverImage: catalog.cover_image || '',
            createdDate: new Date(catalog.created_at),
            updatedDate: new Date(catalog.updated_at),
            colors: catalog.colors || {
              primary: '#000000',
              secondary: '#666666',
              accent: '#0066cc',
              text: '#333333',
              background: '#f8f9fa',
            },
            productsPerPage: catalog.products_per_page || 3,
          }}
          products={catalog.products}
        />
      }
      fileName={`${catalog.name.replace(/\s+/g, '_')}.pdf`}
    >
      {({ loading, error }) => (
        <Button variant="ghost" size="sm" disabled={loading}>
          <Download />
          {loading ? 'Generating...' : 'Download PDF'}
          {error && <span> (Error)</span>}
        </Button>
      )}
    </PDFDownloadLink>
  );
}
