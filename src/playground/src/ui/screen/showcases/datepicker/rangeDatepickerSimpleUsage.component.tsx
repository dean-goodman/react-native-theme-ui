import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Layout,
  RangeDatepicker,
} from 'react-native-ui-kitten';

export const RangeDatepickerSimpleUsageShowcase = () => {

  const [range, setRange] = React.useState({});

  return (
    <Layout style={styles.container}>
      <RangeDatepicker
        range={range}
        onSelect={setRange}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 376,
  },
});

