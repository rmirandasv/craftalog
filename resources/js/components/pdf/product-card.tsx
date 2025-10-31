import type { Product } from '@/types';
import { Image, Text, View } from '@react-pdf/renderer';

interface ProductCardProps {
  product: Product;
  layout: 'single' | 'double' | 'triple';
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    text: string;
    background: string;
  };
}

export function ProductCard({
  product,
  layout = 'single',
  colors,
}: ProductCardProps) {
  const getLayoutStyles = () => {
    switch (layout) {
      case 'single':
        return {
          container: {
            width: '100%',
            padding: 30,
            backgroundColor: '#ffffff',
            borderRadius: 8,
            border: `2px solid ${colors.accent}`,
          },
          imageContainer: {
            width: '100%',
            height: 350,
            marginBottom: 25,
            borderRadius: 6,
          },
          name: {
            fontSize: 28,
            fontWeight: 'bold',
            color: colors.primary,
            marginBottom: 15,
          },
          description: {
            fontSize: 14,
            color: colors.text,
            lineHeight: 1.6,
            marginBottom: 20,
          },
          price: {
            fontSize: 32,
            fontWeight: 'bold',
            color: colors.accent,
          },
          metadata: {
            fontSize: 11,
            color: colors.secondary,
            marginTop: 15,
          },
        };
      case 'double':
        return {
          container: {
            width: '48%',
            padding: 20,
            backgroundColor: '#ffffff',
            borderRadius: 6,
            border: `1.5px solid ${colors.accent}`,
          },
          imageContainer: {
            width: '100%',
            height: 200,
            marginBottom: 15,
            borderRadius: 4,
          },
          name: {
            fontSize: 18,
            fontWeight: 'bold',
            color: colors.primary,
            marginBottom: 10,
          },
          description: {
            fontSize: 11,
            color: colors.text,
            lineHeight: 1.5,
            marginBottom: 12,
          },
          price: {
            fontSize: 22,
            fontWeight: 'bold',
            color: colors.accent,
          },
          metadata: {
            fontSize: 9,
            color: colors.secondary,
            marginTop: 10,
          },
        };
      case 'triple':
        return {
          container: {
            width: '31%',
            padding: 15,
            backgroundColor: '#ffffff',
            borderRadius: 4,
            border: `1px solid ${colors.accent}`,
          },
          imageContainer: {
            width: '100%',
            height: 140,
            marginBottom: 12,
            borderRadius: 3,
          },
          name: {
            fontSize: 14,
            fontWeight: 'bold',
            color: colors.primary,
            marginBottom: 8,
          },
          description: {
            fontSize: 9,
            color: colors.text,
            lineHeight: 1.4,
            marginBottom: 10,
          },
          price: {
            fontSize: 18,
            fontWeight: 'bold',
            color: colors.accent,
          },
          metadata: {
            fontSize: 8,
            color: colors.secondary,
            marginTop: 8,
          },
        };
      default:
        return {
          container: {
            width: '100%',
            padding: 30,
            backgroundColor: '#ffffff',
            borderRadius: 8,
            border: `2px solid ${colors.accent}`,
          },
          imageContainer: {
            width: '100%',
            height: 350,
            marginBottom: 25,
            borderRadius: 6,
          },
          name: {
            fontSize: 28,
            fontWeight: 'bold',
            color: colors.primary,
            marginBottom: 15,
          },
          description: {
            fontSize: 14,
            color: colors.text,
            lineHeight: 1.6,
            marginBottom: 20,
          },
          price: {
            fontSize: 32,
            fontWeight: 'bold',
            color: colors.accent,
          },
          metadata: {
            fontSize: 11,
            color: colors.secondary,
            marginTop: 15,
          },
        };
    }
  };

  const layoutStyles = getLayoutStyles();

  return (
    <View style={layoutStyles.container}>
      <View style={layoutStyles.imageContainer}>
        <Image
          src={product.image || '/placeholder.svg'}
          style={{ width: '100%', height: '100%' }}
        />
      </View>
      <Text style={layoutStyles.name}>{product.name}</Text>
      <Text style={layoutStyles.description}>{product.description}</Text>
      {product.price && (
        <Text style={layoutStyles.price}>
          ${product.price.toLocaleString('es-ES', { minimumFractionDigits: 2 })}
        </Text>
      )}
      {product.category && (
        <Text style={layoutStyles.metadata}>
          Categoría: {product.category.name}
        </Text>
      )}
    </View>
  );
}
