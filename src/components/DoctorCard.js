import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

/**
 * DoctorCard - Skeleton component for displaying doctor information
 * 
 * TODO: Port functionality from Next.js source:
 * Repository: https://github.com/avinashhasule/registration
 * Source files: components in app/patient/appointment and related pages
 * 
 * This component displays doctor information in a card format,
 * typically used in appointment lists.
 */
const DoctorCard = ({
  doctor,
  specialization,
  experience,
  rating,
  imageUrl,
  onPress,
  style,
}) => {
  // TODO: Add doctor avatar/image
  // TODO: Add rating stars display
  // TODO: Add availability indicator
  // TODO: Port styling from Next.js source

  return (
    <TouchableOpacity 
      style={[styles.container, style]} 
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.imageContainer}>
        {/* TODO: Replace with actual image component */}
        <View style={styles.imagePlaceholder}>
          <Text style={styles.imagePlaceholderText}>👨‍⚕️</Text>
        </View>
      </View>
      
      <View style={styles.infoContainer}>
        <Text style={styles.doctorName}>{doctor || 'Dr. Name'}</Text>
        <Text style={styles.specialization}>
          {specialization || 'Specialization'}
        </Text>
        {experience && (
          <Text style={styles.experience}>
            {experience} years experience
          </Text>
        )}
        {rating && (
          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>⭐ {rating}</Text>
          </View>
        )}
      </View>
      
      <View style={styles.arrowContainer}>
        <Text style={styles.arrow}>›</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 12,
    marginVertical: 6,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center',
  },
  imageContainer: {
    marginRight: 12,
  },
  imagePlaceholder: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagePlaceholderText: {
    fontSize: 30,
  },
  infoContainer: {
    flex: 1,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  specialization: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  experience: {
    fontSize: 12,
    color: '#999',
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 12,
    color: '#ffa726',
  },
  arrowContainer: {
    marginLeft: 8,
  },
  arrow: {
    fontSize: 24,
    color: '#999',
  },
});

export default DoctorCard;
