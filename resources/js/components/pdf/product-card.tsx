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
            padding: 35,
            backgroundColor: '#ffffff',
            borderRadius: 12,
            border: `2px solid ${colors.accent}`,
            boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
          },
          imageContainer: {
            width: '100%',
            height: 350,
            marginBottom: 25,
            borderRadius: 8,
            overflow: 'hidden' as const,
            border: `1px solid ${colors.accent}20`,
            backgroundColor: colors.background,
          },
          name: {
            fontSize: 32,
            fontWeight: 'bold',
            color: colors.primary,
            marginBottom: 15,
            letterSpacing: -0.3,
          },
          description: {
            fontSize: 15,
            color: colors.text,
            lineHeight: 1.7,
            marginBottom: 20,
            opacity: 0.85,
          },
          priceContainer: {
            paddingTop: 15,
            borderTop: `2px solid ${colors.accent}30`,
            marginTop: 10,
          },
          price: {
            fontSize: 36,
            fontWeight: 'bold',
            color: colors.accent,
          },
          metadata: {
            fontSize: 11,
            color: colors.secondary,
            marginTop: 12,
            fontWeight: 600,
          },
        };
      case 'double':
        return {
          container: {
            width: '48%',
            padding: 24,
            backgroundColor: '#ffffff',
            borderRadius: 10,
            border: `2px solid ${colors.accent}`,
            boxShadow: '0 6px 18px rgba(0,0,0,0.1)',
          },
          imageContainer: {
            width: '100%',
            height: 220,
            marginBottom: 16,
            borderRadius: 8,
            overflow: 'hidden' as const,
            border: `1px solid ${colors.accent}20`,
            backgroundColor: colors.background,
          },
          name: {
            fontSize: 20,
            fontWeight: 'bold',
            color: colors.primary,
            marginBottom: 10,
            letterSpacing: -0.2,
          },
          description: {
            fontSize: 12,
            color: colors.text,
            lineHeight: 1.6,
            marginBottom: 12,
            opacity: 0.85,
          },
          priceContainer: {
            paddingTop: 12,
            borderTop: `2px solid ${colors.accent}30`,
            marginTop: 8,
          },
          price: {
            fontSize: 24,
            fontWeight: 'bold',
            color: colors.accent,
          },
          metadata: {
            fontSize: 10,
            color: colors.secondary,
            marginTop: 10,
            fontWeight: 600,
          },
        };
      case 'triple':
        return {
          container: {
            width: '31%',
            padding: 18,
            backgroundColor: '#ffffff',
            borderRadius: 8,
            border: `1.5px solid ${colors.accent}`,
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          },
          imageContainer: {
            width: '100%',
            height: 160,
            marginBottom: 12,
            borderRadius: 6,
            overflow: 'hidden' as const,
            border: `1px solid ${colors.accent}20`,
            backgroundColor: colors.background,
          },
          name: {
            fontSize: 15,
            fontWeight: 'bold',
            color: colors.primary,
            marginBottom: 8,
            letterSpacing: -0.1,
          },
          description: {
            fontSize: 10,
            color: colors.text,
            lineHeight: 1.5,
            marginBottom: 10,
            opacity: 0.85,
          },
          priceContainer: {
            paddingTop: 10,
            borderTop: `2px solid ${colors.accent}30`,
            marginTop: 6,
          },
          price: {
            fontSize: 20,
            fontWeight: 'bold',
            color: colors.accent,
          },
          metadata: {
            fontSize: 9,
            color: colors.secondary,
            marginTop: 8,
            fontWeight: 600,
          },
        };
      default:
        return {
          container: {
            width: '100%',
            padding: 35,
            backgroundColor: '#ffffff',
            borderRadius: 12,
            border: `2px solid ${colors.accent}`,
            boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
          },
          imageContainer: {
            width: '100%',
            height: 350,
            marginBottom: 25,
            borderRadius: 8,
            overflow: 'hidden' as const,
            border: `1px solid ${colors.accent}20`,
            backgroundColor: colors.background,
          },
          name: {
            fontSize: 32,
            fontWeight: 'bold',
            color: colors.primary,
            marginBottom: 15,
            letterSpacing: -0.3,
          },
          description: {
            fontSize: 15,
            color: colors.text,
            lineHeight: 1.7,
            marginBottom: 20,
            opacity: 0.85,
          },
          priceContainer: {
            paddingTop: 15,
            borderTop: `2px solid ${colors.accent}30`,
            marginTop: 10,
          },
          price: {
            fontSize: 36,
            fontWeight: 'bold',
            color: colors.accent,
          },
          metadata: {
            fontSize: 11,
            color: colors.secondary,
            marginTop: 12,
            fontWeight: 600,
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
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </View>
      <Text style={layoutStyles.name}>{product.name}</Text>
      <Text style={layoutStyles.description}>{product.description}</Text>
      {product.price && (
        <View style={layoutStyles.priceContainer}>
          <Text style={layoutStyles.price}>
            ${product.price.toLocaleString('es-ES', { minimumFractionDigits: 2 })}
          </Text>
        </View>
      )}
      {product.category && (
        <Text style={layoutStyles.metadata}>
          Categoría: {product.category.name}
        </Text>
      )}
    </View>
  );
}
