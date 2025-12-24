import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Linking} from 'react-native';

/**
 * Footer - Skeleton component for application footer
 * 
 * TODO: Port functionality from Next.js source:
 * Repository: https://github.com/avinashhasule/registration
 * Source files: Layout components, global footer
 * 
 * This component provides a consistent footer with links and information.
 */
const Footer = ({style}) => {
  // TODO: Add app version
  // TODO: Add terms and conditions link
  // TODO: Add privacy policy link
  // TODO: Add contact support link
  // TODO: Port footer styling from Next.js source

  const handleLinkPress = (url) => {
    // TODO: Implement proper link handling
    console.log('Link pressed:', url);
    if (url) {
      Linking.openURL(url).catch(err => console.error('Error opening link:', err));
    }
  };

  return (
    <View style={[styles.container, style]}>
      <View style={styles.linksContainer}>
        <TouchableOpacity onPress={() => handleLinkPress('#terms')}>
          <Text style={styles.linkText}>Terms & Conditions</Text>
        </TouchableOpacity>
        <Text style={styles.separator}>•</Text>
        <TouchableOpacity onPress={() => handleLinkPress('#privacy')}>
          <Text style={styles.linkText}>Privacy Policy</Text>
        </TouchableOpacity>
        <Text style={styles.separator}>•</Text>
        <TouchableOpacity onPress={() => handleLinkPress('#support')}>
          <Text style={styles.linkText}>Support</Text>
        </TouchableOpacity>
      </View>
      
      <Text style={styles.copyrightText}>
        © 2024 Patient App. All rights reserved.
      </Text>
      
      <Text style={styles.versionText}>
        Version 1.0.0
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    alignItems: 'center',
  },
  linksContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  linkText: {
    fontSize: 12,
    color: '#2196f3',
    marginHorizontal: 5,
  },
  separator: {
    fontSize: 12,
    color: '#999',
    marginHorizontal: 5,
  },
  copyrightText: {
    fontSize: 11,
    color: '#999',
    marginBottom: 5,
  },
  versionText: {
    fontSize: 10,
    color: '#bbb',
  },
});

export default Footer;
