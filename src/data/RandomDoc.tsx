import { Document, Page, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 20,
    backgroundColor: '#fff',
    color: '#000',
  },
});

const RandomDoc = () => (
  <Document>
    <Page size='A4' style={styles.page}>
      <Text>Hello! This is a test PDF</Text>
    </Page>
  </Document>
);

export default RandomDoc;
