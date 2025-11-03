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
      position: 'relative',
    },
    // Decorative top accent bar
    topAccent: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 8,
      backgroundColor: colors.accent,
    },
    // Decorative background shape
    backgroundShape: {
      position: 'absolute',
      top: -100,
      right: -100,
      width: 400,
      height: 400,
      borderRadius: 200,
      backgroundColor: colors.primary,
      opacity: 0.05,
    },
    contentContainer: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      minHeight: '100%',
      padding: 60,
      paddingTop: 80,
    },
    headerSection: {
      alignItems: 'center',
      width: '100%',
    },
    logoContainer: {
      marginBottom: 40,
      borderRadius: 16,
      overflow: 'hidden',
      boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
    },
    coverImage: {
      width: 200,
      height: 200,
      objectFit: 'contain',
    },
    companyName: {
      fontSize: 56,
      fontWeight: 'bold',
      color: colors.primary,
      marginBottom: 16,
      textAlign: 'center',
      letterSpacing: -0.5,
    },
    catalogName: {
      fontSize: 28,
      color: colors.secondary,
      marginBottom: 20,
      textAlign: 'center',
      fontWeight: 300,
      letterSpacing: 0.5,
    },
    decorativeLine: {
      width: 120,
      height: 4,
      backgroundColor: colors.accent,
      marginTop: 20,
      borderRadius: 2,
    },
    // Middle decorative element
    centerDecoration: {
      width: 100,
      height: 100,
      borderRadius: 50,
      border: `3px solid ${colors.accent}`,
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 20,
    },
    centerIcon: {
      fontSize: 40,
      color: colors.accent,
    },
    // Footer section with dates
    footerSection: {
      width: '100%',
      alignItems: 'center',
      paddingTop: 40,
      borderTop: `2px solid ${colors.accent}`,
    },
    datesContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
      marginTop: 30,
    },
    dateCard: {
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 12,
      minWidth: 200,
      alignItems: 'center',
      boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
      border: `1px solid ${colors.accent}`,
    },
    dateLabel: {
      fontSize: 10,
      color: colors.secondary,
      fontWeight: 'bold',
      letterSpacing: 1.5,
      textTransform: 'uppercase',
      marginBottom: 8,
    },
    dateValue: {
      fontSize: 16,
      color: colors.primary,
      fontWeight: 'bold',
    },
    // Decorative corner elements
    cornerDecoration: {
      position: 'absolute',
      width: 60,
      height: 60,
      borderColor: colors.accent,
    },
    topLeftCorner: {
      top: 20,
      left: 20,
      borderTopWidth: 3,
      borderLeftWidth: 3,
    },
    bottomRightCorner: {
      bottom: 20,
      right: 20,
      borderBottomWidth: 3,
      borderRightWidth: 3,
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
      <View style={styles.topAccent} />
      <View style={styles.backgroundShape} />

      {/* Decorative corners */}
      <View style={[styles.cornerDecoration, styles.topLeftCorner]} />
      <View style={[styles.cornerDecoration, styles.bottomRightCorner]} />

      <View style={styles.contentContainer}>
        {/* Header Section */}
        <View style={styles.headerSection}>
          {coverImage && (
            <View style={styles.logoContainer}>
              <Image src={coverImage} style={styles.coverImage} />
            </View>
          )}
          <Text style={styles.companyName}>{companyName}</Text>
          <Text style={styles.catalogName}>{catalogName}</Text>
          <View style={styles.decorativeLine} />
        </View>

        {/* Center Decoration */}
        <View style={styles.centerDecoration}>
          <Text style={styles.centerIcon}>★</Text>
        </View>

        {/* Footer Section with Dates */}
        <View style={styles.footerSection}>
          <View style={styles.datesContainer}>
            <View style={styles.dateCard}>
              <Text style={styles.dateLabel}>Creado</Text>
              <Text style={styles.dateValue}>{formatDate(createdDate)}</Text>
            </View>
            <View style={styles.dateCard}>
              <Text style={styles.dateLabel}>Actualizado</Text>
              <Text style={styles.dateValue}>{formatDate(updatedDate)}</Text>
            </View>
          </View>
        </View>
      </View>
    </Page>
  );
}
