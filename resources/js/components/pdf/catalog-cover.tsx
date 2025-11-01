import { Image, Page, StyleSheet, Text, View } from '@react-pdf/renderer';

interface CatalogCoverProps {
  companyName: string;
  catalogName: string;
  coverImage: string;
  createdDate: Date;
  updatedDate: Date;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    text: string;
    background: string;
  };
}

export function CatalogCover({
  companyName,
  catalogName,
  coverImage,
  createdDate,
  updatedDate,
  colors,
}: CatalogCoverProps) {
  const styles = StyleSheet.create({
    page: {
      backgroundColor: colors.background,
      padding: 60,
    },
    companyName: {
      fontSize: 48,
      fontWeight: 'bold',
      color: colors.primary,
      marginBottom: 20,
      textAlign: 'center',
    },
    catalogName: {
      fontSize: 32,
      color: colors.secondary,
      marginBottom: 60,
      textAlign: 'center',
    },
    divider: {
      width: '60%',
      height: 2,
      backgroundColor: colors.accent,
      marginVertical: 40,
    },
    dateContainer: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    dateLabel: {
      fontSize: 12,
      color: colors.text,
      opacity: 0.7,
      marginBottom: 12,
    },
    dateValue: {
      fontSize: 16,
      color: colors.text,
      fontWeight: 'bold',
    },
  });

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Page size="A4" style={styles.page}>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {coverImage && (
          <Image
            src={coverImage}
          style={{ width: '100%', height: '100%' }}
        />
        )}
        <Text style={styles.companyName}>{companyName}</Text>
        <Text style={styles.catalogName}>{catalogName}</Text>
        <View style={styles.divider} />
        <View style={styles.dateContainer}>
          <Text style={styles.dateLabel}>FECHA DE CREACIÓN</Text>
          <Text style={styles.dateValue}>{formatDate(createdDate)}</Text>
        </View>
        <View style={{ height: 30 }} />
        <View style={styles.dateContainer}>
          <Text style={styles.dateLabel}>ÚLTIMA ACTUALIZACIÓN</Text>
          <Text style={styles.dateValue}>{formatDate(updatedDate)}</Text>
        </View>
      </View>
    </Page>
  );
}
