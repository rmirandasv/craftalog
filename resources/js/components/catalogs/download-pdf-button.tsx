import { Button } from "@/components/ui/button";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { CatalogDocument } from "@/components/pdf/catalog-document";
import { Catalog } from "@/types";
import { Download } from "lucide-react";

type DownloadPdfButtonProps = {
  catalog: Catalog;
};

export default function DownloadPdfButton({
  catalog,
}: DownloadPdfButtonProps) {
  const config = {
    companyName: catalog.company_name || "Company",
    catalogName: catalog.name,
    createdDate: new Date(catalog.created_at),
    updatedDate: new Date(catalog.updated_at),
    colors: {
      primary: "#000000",
      secondary: "#666666",
      accent: "#0066cc",
      text: "#333333",
      background: "#f8f9fa",
    },
  };

  return (
    <PDFDownloadLink
      document={<CatalogDocument config={config} products={catalog.products} />}
      fileName={`${catalog.name.replace(/\s+/g, "_")}.pdf`}
    >
      {({ blob, url, loading, error }) => (
        <Button variant="ghost" size="sm" disabled={loading}>
          <Download />
          {loading ? "Generating..." : "Download PDF"}
          {error && <span> (Error)</span>}
        </Button>
      )}
    </PDFDownloadLink>
  );
}

