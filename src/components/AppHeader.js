import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

/**
 * AppHeader - Skeleton component for application header
 * 
 * TODO: Port functionality from Next.js source:
 * Repository: https://github.com/avinashhasule/registration
 * Source files: Layout components, global header
 * 
 * This component provides a consistent header across the app with
 * navigation, title, and action buttons.
 */
const AppHeader = ({
  title,
  onBackPress,
  onMenuPress,
  rightAction,
  showBack = false,
  showMenu = false,
}) => {
  // TODO: Add user profile icon
  // TODO: Add notification bell
  // TODO: Add menu/hamburger icon
  // TODO: Port header styling from Next.js source

  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        {showBack && (
          <TouchableOpacity 
            style={styles.iconButton} 
            onPress={onBackPress}
          >
            <Text style={styles.icon}>←</Text>
          </TouchableOpacity>
        )}
        {showMenu && (
          <TouchableOpacity 
            style={styles.iconButton} 
            onPress={onMenuPress}
          >
            <Text style={styles.icon}>☰</Text>
          </TouchableOpacity>
        )}
      </View>
      
      <View style={styles.centerSection}>
        <Text style={styles.title}>{title || 'Patient App'}</Text>
      </View>
      
      <View style={styles.rightSection}>
        {rightAction || (
          <View style={styles.iconPlaceholder}>
            {/* TODO: Add notification/profile icons */}
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: '#2196f3',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  leftSection: {
    width: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  centerSection: {
    flex: 1,
    alignItems: 'center',
  },
  rightSection: {
    width: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  iconButton: {
    padding: 8,
  },
  icon: {
    fontSize: 24,
    color: '#ffffff',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
  },
  iconPlaceholder: {
    width: 40,
    height: 40,
  },
});

export default AppHeader;
