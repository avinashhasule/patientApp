// Default layout for all pages with header and footer and a main content area and home button react native

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Loader from './components/Loader';
import KeyboardAwareWrapper from './components/KeyboardAwareWrapper';

const PageLayout = ({loader = false, children, showBackOption = false}) => {
  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      {loader && <Loader loading={true} />}
      <KeyboardAwareWrapper>{children}</KeyboardAwareWrapper>
    </SafeAreaView>
  );
};

// Layout Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 75,
    padding: 10,
  },
  headerViewStyle: {
    borderBottomColor: '#EAECF0',
    borderBottomWidth: 1,
  },
  headerNotficiationStyle: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  profileDetailStyle: {
    flexDirection: 'row',
    gap: 10,
  },
  headerStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#fff',
  },
  backIconImage: {
    width: 40,
    height: 40,
  },
  rightIconImage: {
    width: 40,
    height: 40,
  },
  textContainer: {
    gap: 2,
    display: 'flex',
    flexDirection: 'column',
  },
  orgContainer: {flexDirection: 'row', alignItems: 'center', gap: 4},
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#101828',
  },
  subtitle: {
    fontSize: 14,
    color: '#667085',
    marginBottom: 8,
  },
  option: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 16,
  },
  selectedOption: {
    backgroundColor: '#F0F7FF',
  },
  optionText: {
    fontSize: 16,
    color: '#1D2939',
  },
  selectedText: {
    fontWeight: '600',
  },
  cancelButton: {
    marginTop: 8,
    marginBottom: 12,
    paddingVertical: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#D0D5DD',
    alignItems: 'center',
  },
  cancelText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1D2939',
  },
});

export default PageLayout;
