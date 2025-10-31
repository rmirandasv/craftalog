import { ProductCard } from '@/components/pdf/product-card';
import { Product } from '@/types';
import { Document, Page, StyleSheet, View } from '@react-pdf/renderer';
import { CatalogCover } from './catalog-cover';

interface CatalogDocumentProps {
  config: {
    companyName: string;
    catalogName: string;
    createdDate: Date;
    updatedDate: Date;
    colors: {
      primary: string;
      secondary: string;
      accent: string;
      text: string;
      background: string;
    };
  };
  products: Product[];
}

export function CatalogDocument({ config, products }: CatalogDocumentProps) {
  const styles = StyleSheet.create({
    page: {
      backgroundColor: config.colors.background,
      padding: 40,
    },
    productsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
  });

  const getLayout = (count: number) => {
    if (count <= 1) return 'single';
    if (count === 2) return 'double';
    return 'triple';
  };

  const chunkProducts = () => {
    const chunks = [];
    for (let i = 0; i < products.length; i += 3) {
      chunks.push(products.slice(i, i + 3));
    }
    return chunks;
  };

  const productPages = chunkProducts();

  return (
    <Document>
      <CatalogCover
        companyName={config.companyName}
        catalogName={config.catalogName}
        createdDate={config.createdDate}
        updatedDate={config.updatedDate}
        colors={config.colors}
      />
      {productPages.map((pageProducts, pageIndex) => {
        const layout = getLayout(pageProducts.length);
        return (
          <Page key={pageIndex} size="A4" style={styles.page}>
            <View style={styles.productsContainer}>
              {pageProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  layout={layout as 'single' | 'double' | 'triple'}
                  colors={config.colors}
                />
              ))}
            </View>
          </Page>
        );
      })}
    </Document>
  );
}
